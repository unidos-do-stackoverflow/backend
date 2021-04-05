import { Request, Response } from 'express-serve-static-core';
import { IdGenerator } from '../../../shared/infra/service/IdGenerator';
import { UserDataBase } from '../../user/data/UserDataBase';
import { Authenticator } from '../../user/services/Autheticator';
import { FeedBusiness } from '../business/FeedBusiness';
import { FeedDataBase } from '../data/FeedDataBase';
import { IFeedInputDTO } from '../interfaces/DTO/IFeedInputDTO';

const feedBusiness = new FeedBusiness(
	new IdGenerator(),
	new Authenticator(),
	new UserDataBase(),
	new FeedDataBase
);

export class FeedControllers {

	async create(req: Request, res: Response): Promise<Response> {

		try {

			const { authorization } = req.headers;

			const {
				description,
				photo,
				likes
			} = req.body;

			const feed: IFeedInputDTO = await feedBusiness.create({
				description,
				photo,
				likes
			}, authorization as string);

			return res.status(201).send({
				success: true,
				feed
			});

		} catch (error) {
			return res.status(500).send({ error: error.message });
		}
	}

	async get(req: Request, res: Response): Promise<Response> {
		try {

			const feed = await feedBusiness.get();

			return res.status(200).send(feed);

		} catch (error) {
			return res.status(500).send({ error: error.message });
		}
	}
}

