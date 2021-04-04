import { Request, Response } from 'express';
import { IdGenerator } from '../../../shared/infra/service/IdGenerator';
import { UserDataBase } from '../../user/data/UserDataBase';
import { Authenticator } from '../../user/services/Autheticator';
import { ChildrenBusiness } from '../business/ChildrenBusiness';
import { ChildrenDataBase } from '../data/ChildrenDataBase';
import { IChildrenInputDTO } from '../interfaces/DTO/IChildrenInputDTO';

const childrenBusiness = new ChildrenBusiness(
	new ChildrenDataBase(),
	new UserDataBase(),
	new IdGenerator(),
	new Authenticator()
);

export class ChildrenController {

	async create(req: Request, res: Response) {

		try {

			const { authorization } = req.headers;

			const {
				name,
				dateOfBirth,
				gender,
				address,
				school,
				year

			} = req.body;

			const children: IChildrenInputDTO =  await childrenBusiness.create({
				name,
				dateOfBirth,
				gender,
				address,
				school,
				year
			}, authorization as string)

			console.log('controller' +children)

			// await childrenBusiness.create(children, authorization as string)

			return res.status(201).send({
				success: true,
				message: 'Children created successfully',
				children
			});

		} catch (error) {
			return res.status(500).send({ error: error.message });
		}
	}
}
