import { BaseError } from '../../../shared/infra/error/BaseError';
import { InvalidInputError } from '../../../shared/infra/error/InvalidInputError';
import { IdGenerator } from '../../../shared/infra/service/IdGenerator';
import { UserDataBase } from '../../user/data/UserDataBase';
import { Authenticator } from '../../user/services/Autheticator';
import { ChildrenDataBase } from '../data/ChildrenDataBase';
import { IChildrenInputDTO } from '../interfaces/DTO/IChildrenInputDTO';
import { Gender, IChildren, Year } from '../interfaces/IChildren';

export class ChildrenBusiness {
	constructor(
		private childrenDataBase: ChildrenDataBase,
		private userDataBase: UserDataBase,
		private idGenerator: IdGenerator,
		private authenticator: Authenticator
	) {}

	async checkedGender(input: string): Promise<Gender> {
		switch (input) {
			case 'feminino':
				return Gender.Female;
			case 'masculino':
				return Gender.Male;
			case 'prefiro não dizer':
				return Gender.PreferNotToSay;
			default:
				throw new BaseError('invalid gender. Place Female, Male or Prefer not to say');
		}
	}

	async checkedYear(input: string): Promise<Year> {
		switch (input) {
			case '1° ano - ensino fundamental I':
				return Year.firstYear;
			case '2° ano - ensino fundamental I':
				return Year.secondYear;
			case '3° ano - ensino fundamental I':
				return Year.thirdYear;
			case '4° ano - ensino fundamental I':
				return Year.ForthYear;
			case '5° ano - ensino fundamental I':
				return Year.fifthYear;
			case '6° ano - ensino fundamental I':
				return Year.sixthYear;
			case '7° ano - ensino fundamental II':
				return Year.seventhYear;
			case '8° ano - ensino fundamental II':
				return Year.eighthYear;
			case '9° ano - ensino fundamental II':
				return Year.ninthGrade;
			case '1° ano - ensino médio':
				return Year.firstYearhighSchool;
				case '2° ano - ensino médio':
				return Year.secondYearhighSchool
				case '3° ano - ensino médio':
				return Year.thirdYearhighSchool;
			default:
				throw new BaseError('invalid year');
		}
	}

	async create(input: IChildrenInputDTO, authorization: string): Promise<IChildren> {

		if (!input.name || !input.dateOfBirth || !input.gender || !input.address || !input.school ||!input.year) {
			throw new InvalidInputError('Invalid entry for registration. Enter the name, date of birth, gender, address, year and school');
		}

		if(!authorization) {
			throw new InvalidInputError('You must inform authorization token in headers');
		}

		const gender = await this.checkedGender(input.gender);

		const year = await this.checkedYear(input.year)

		const verifyToken = this.authenticator.getToken(authorization);

		if (!verifyToken) {
			throw new BaseError('You must logged in ');
		}

		const user_id = await this.userDataBase.getById((await verifyToken).id);

		const id = this.idGenerator.generate();

		const children: IChildren = {
			id,
			name: input.name,
			dateOfBirth: input.dateOfBirth,
			gender,
			address: input.address,
			school: input.school,
			year,
			user_id: user_id.id,
		}

		await this.childrenDataBase.create(children);

		console.log(input);
		console.log(children);


		return children

	}

}
