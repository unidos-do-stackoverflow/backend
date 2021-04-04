import { Gender } from '../../user/interfaces/IUser';

export interface IChildren {
	id: string,
	name: string,
	dateOfBirth: string,
	gender: Gender,
	address: string,
	school: string,
	year: Year,
	user_id: string
}

export enum Year {
	FirstYear = '1° ano - ensino fundamental I',
	SecondYear = '2° ano - ensino fundamental I',
	ThirdYear = '3° ano - ensino fundamental I',
	ForthYear = '4° ano - ensino fundamental I',
	FifthYear = '5° ano - ensino fundamental I',
	SixthYear = '6° ano - ensino fundamental I',
	SeventhYear = '7° ano - ensino fundamental II',
	EighthYear = '8° ano - ensino fundamental II',
	NinthGrade = '9° ano - ensino fundamental II',
	FirstYearhighSchool  = '1° ano - ensino médio',
	SecondYearhighSchool  = '2° ano - ensino médio',
	ThirdYearhighSchool  = '3° ano - ensino médio'
}
