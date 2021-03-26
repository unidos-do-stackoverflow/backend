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
					address: user.address
        })
        .into(UserDataBase.tableName);
    } catch (error) {
      throw new BaseError(error.message || error.sqlMessage);
    }
  }
}
