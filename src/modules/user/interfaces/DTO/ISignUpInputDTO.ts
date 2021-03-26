import { Gender } from '../IUser';

export interface ISignupInputDTO  {
	name: string,
	email: string,
	password: string,
	gender: Gender,
	dateOfBirth: string,
	cpf: string,
	numberOfChildren: number,
	address?: string
}
