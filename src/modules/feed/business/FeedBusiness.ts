import { InvalidInputError } from '../../../shared/infra/error/InvalidInputError';
import { IdGenerator } from '../../../shared/infra/service/IdGenerator';
import { UserDataBase } from '../../user/data/UserDataBase';
import { Authenticator } from '../../user/services/Autheticator';
import { IFeedInputDTO } from '../interfaces/DTO/IFeedInputDTO';

import moment from 'moment';
import { IFeed } from '../interfaces/IFeed';
import { FeedDataBase } from '../data/FeedDataBase';

export class FeedBusiness {
	constructor(
		private idGenerator: IdGenerator,
		private autheticator: Authenticator,
		private userDataBase: UserDataBase,
		private feedDataBase: FeedDataBase
	) {}

	async create(input: IFeedInputDTO, authorization: string): Promise<IFeed> {

		if (!input.description) {
			throw new InvalidInputError('Invalid entry for registration. Enter the description.');
		}

		if(!authorization) {
			throw new InvalidInputError('Invalid entry for registration. Enter the description.');
		}

		const verifyToken = this.autheticator.getToken(authorization);

		const user_id = await this.userDataBase.getById((await verifyToken).id);

		const id = this.idGenerator.generate();

		const creationDate = Date.now();

		const date = moment(creationDate).format('DD/MM/YYYY');

		const feed: IFeed = {
			id,
			description: input.description,
			photo: input.photo,
			likes: input.likes,
			created_at: date,
			user_id: user_id.id
		};

		await this.feedDataBase.create(feed);

		return feed

	}

	async get(): Promise<void> {

		const feed = await this.feedDataBase.get();

		return feed;
	}
}
