export interface IChildren {
	id: string,
	name: string,
	dateOfBirth: string,
	gender: Gender,
	address: string,
	school: string,
	year: string,
	user_id: string
}

export enum Gender {
	Female = 'feminino',
	Male = 'masculino',
	PreferNotToSay = 'prefiro não dizer'
}

export enum Year {
	firstYear = '1° ano - ensino fundamental I',
	secondYear = '2° ano - ensino fundamental I',
	thirdYear = '3° ano - ensino fundamental I',
	ForthYear = '4° ano - ensino fundamental I',
	fifthYear = '5° ano - ensino fundamental I',
	sixthYear = '6° ano - ensino fundamental I',
	seventhYear = '7° ano - ensino fundamental II',
	eighthYear = '8° ano - ensino fundamental II',
	ninthGrade = '9° ano - ensino fundamental II',
	firstYearhighSchool  = '1° ano - ensino médio',
	secondYearhighSchool  = '2° ano - ensino médio',
	thirdYearhighSchool  = '3° ano - ensino médio'
}
