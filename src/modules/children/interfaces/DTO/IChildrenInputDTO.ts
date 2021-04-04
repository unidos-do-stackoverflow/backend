import { Gender } from '../../../user/interfaces/IUser';
import { Year } from '../IChildren';

export interface IChildrenInputDTO {
	name: string,
	dateOfBirth: string,
	gender: Gender,
	address: string,
	school: string,
	year: Year
}
