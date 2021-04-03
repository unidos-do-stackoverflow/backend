import { BaseError } from '../../../shared/infra/error/BaseError';
import { InvalidInputError } from '../../../shared/infra/error/InvalidInputError';
import { IdGenerator } from '../../../shared/infra/service/IdGenerator';
import { UserDataBase } from '../data/UserDataBase';
import { ILoginInputDTO } from '../interfaces/DTO/ILoginInputDTO';
import { ISignupInputDTO } from '../interfaces/DTO/ISignUpInputDTO';
import { Gender } from '../interfaces/IUser';
import { Authenticator } from '../services/Autheticator';
import { HashManager } from '../services/HashManager';

export class UserBusiness {
	constructor(
		private userDataBase: UserDataBase,
		private idGenerator: IdGenerator,
		private hashManager: HashManager,
		private authenticator: Authenticator
) { }

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

	async create(input: ISignupInputDTO): Promise<string> {

		if (!input.name || !input.email || !input.password || !input.gender || !input.dateOfBirth || !input.cpf || !input.numberOfChildren) {
			throw new InvalidInputError('Invalid entry for registration. Enter the name, email, password, gender, date of birth, CPF and the number of children ');
		}

		if(!input.email.includes('@')) {
			throw new InvalidInputError('Invalid email format');
		}

		if (input.password && input.password.length < 6) {
			throw new InvalidInputError('Password should have more than 6 digits');
		}

		const gender = await this.checkedGender(input.gender);

		const id = this.idGenerator.generate();

		const hashPassword = await this.hashManager.hash(input.password);

		const user = {
			id,
			name: input.name,
			email: input.email,
			gender,
			dateOfBirth: input.dateOfBirth,
			cpf: input.cpf,
			numberOfChildren: input.numberOfChildren,
			address: input.address,
			password: hashPassword
		};

		await this.userDataBase.create(user);

		const acessToken = this.authenticator.generate({ id });

		return acessToken;

	}

	async getUserByEmail(input: ILoginInputDTO): Promise<string> {
		if (!input.email || !input.password) {
			throw new InvalidInputError('enter "email" and "password"');
		}

		if (!input.email.includes('@')) {
			throw new InvalidInputError('Invalid email format');
		}

		const userFromDB = await this.userDataBase.getByEmail(input.email);

		if (!userFromDB) {
			throw new InvalidInputError('Invalid email. Check if the email entered is correct or register');
		}

		const passwordIsCorrect = await this.hashManager.compare(
			input.password,
			userFromDB.password
		);

		if (!passwordIsCorrect) {
			throw new InvalidInputError('Invalid password');
		}

		const acessToken = this.authenticator.generate({
			id: userFromDB.id
		});

		return acessToken

	}

}
