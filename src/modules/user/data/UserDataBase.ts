import { DataBase } from '../../../shared/infra/data/DataBase';
import { BaseError } from '../../../shared/infra/error/BaseError';
import { IUser } from '../interfaces/IUser';

export class UserDataBase extends DataBase {

  private static tableName = 'User';

  public async create(
		user: IUser
		): Promise<void> {
    try {
      await DataBase.connection()
        .insert({
          id: user.id,
          name: user.name,
					email: user.email,
          password: user.password,
					gender: user.gender,
					dateOfBirth: user.dateOfBirth,
					cpf: user.cpf,
					numberOfChildren: user.numberOfChildren,
					address: user.address,
					photo: user.photo
        })
        .into(UserDataBase.tableName);
    } catch (error) {
      throw new BaseError(error.message || error.sqlMessage);
    }
  }

	public async getByEmail(email: string): Promise<IUser> {
		try {
			const result = await DataBase.connection
			.select('*')
			.from(UserDataBase.tableName)
			.where({ email });

			return result[0];

		} catch (error) {
			throw new BaseError(error.message || error.sqlMessage);
		}
	}

	public async getById(id: string): Promise<IUser> {
		try {
			const result = await DataBase.connection
			.select('*')
			.from(UserDataBase.tableName)
			.where({ id });

			return result[0];

		} catch (error) {
			throw new BaseError(error.message || error.sqlMessage);
		}
	}

	//TODO: os valores estão sendo retornados repetidos. arrumar isso.

	public async getChildren(id: string): Promise<void> {
    try {

        const result = await DataBase.connection.raw(`
        SELECT Children.name, User.id
				FROM Children
				INNER JOIN User
				ON Children.user_id = '${id}'
        `);

        return result[0];

    } catch (error) {
        throw new BaseError(error.message || error.sqlMessage);
    }
}

}
