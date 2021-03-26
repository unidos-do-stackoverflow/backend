import { Request, Response } from 'express';
import { IdGenerator } from '../../../shared/infra/service/IdGenerator';
import { UserBusiness } from '../business/UserBusiness';
import { UserDataBase } from '../data/UserDataBase';
import { Authenticator } from '../services/Autheticator';
import { HashManager } from '../services/HashManager';

const userBusiness = new UserBusiness(
	new UserDataBase(),
	new IdGenerator(),
	new HashManager(),
	new Authenticator(),
);

export class UserController {

	async signup(req: Request, res: Response): Promise<Response> {
			try {

				const {
					name,
					email,
					password,
					gender,
					dateOfBirth,
					cpf,
					numberOfChildren,
					address

				} = req.body;


					const token = await userBusiness.create({
						name,
						email,
						password,
						gender,
						dateOfBirth,
						cpf,
						numberOfChildren,
						address,
					});

				return	res.status(201).send({ token: token });

			} catch (error) {
				return res.status(500).send({ error: error.message });
			}
	}

	async login(req: Request, res: Response): Promise<Response> {

		try {

			const { email, password } = req.body

			const token = await userBusiness.getUserByEmail({
				email,
				password
			})

			return res.status(201).send({ token: token })

		} catch (error) {
			return res.status(500).send({ error: error.message })
		}
	}
}
