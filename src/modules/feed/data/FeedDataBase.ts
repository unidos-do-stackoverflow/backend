import { DataBase } from '../../../shared/infra/data/DataBase';
import { BaseError } from '../../../shared/infra/error/BaseError';
import { IFeed } from '../interfaces/IFeed';

export class FeedDataBase extends DataBase {

	//TODO: colocar array de comentários no feed

	private static tableName = 'Feed';

	public async create(
		feed: IFeed
	): Promise<void> {
		try {

			await DataBase.connection()
			.insert({
				id: feed.id,
				description: feed.description,
				photo: feed.photo,
				likes: feed.likes,
				created_at: feed.created_at,
				user_id: feed.user_id
			})
			.into(FeedDataBase.tableName);

		} catch (error) {
			throw new BaseError(error.message || error.sqlMessage);
		}
	}

	public async get(): Promise<void> {
		try {

			const result = await DataBase.connection.raw(`
			SELECT Feed.id, Feed.description, Feed.photo, Feed.likes, Feed.created_at, User.id, User.name
			FROM Feed
			INNER JOIN User
			ON Feed.user_id = User.id
			`);

			return result[0];

		} catch (error) {
			throw new BaseError(error.message || error.sqlMessage);
		}
	}
}
