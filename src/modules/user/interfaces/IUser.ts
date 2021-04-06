
export interface IUser {
	id: string,
	name: string,
	email: string,
	password: string,
	gender: Gender,
	dateOfBirth: string,
	cpf: string,
	numberOfChildren: number,
	address?: string,
	photo?: string

}

export enum Gender {
	Female = 'feminino',
	Male = 'masculino',
	PreferNotToSay = 'prefiro não dizer'
}

