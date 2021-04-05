import { DataBase } from '../../../shared/infra/data/DataBase';
import { BaseError } from '../../../shared/infra/error/BaseError';
import { IChildren } from '../interfaces/IChildren';

export class ChildrenDataBase extends DataBase {

	private static tableName = 'Children';

	public async create(
		children: IChildren
	): Promise<IChildren> {
		try {

			await DataBase.connection()
			.insert({
				id: children.id,
				name: children.name,
				dateOfBirth: children.dateOfBirth,
				gender: children.gender,
				address: children.address,
				school: children.school,
				year: children.year,
				user_id: children.user_id
			})
			.into(ChildrenDataBase.tableName);

			return children

		} catch (error) {
			throw new BaseError(error.message || error.sqlMessage);
		}
	}
}
