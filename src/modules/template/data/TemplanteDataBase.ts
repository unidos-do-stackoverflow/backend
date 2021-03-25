import { DataBase } from '../../../shared/infra/data/DataBase';
import { BaseError } from '../../../shared/infra/error/BaseError';
import { Template } from '../interfaces/Template';


export class TemplateDataBase extends DataBase {

	private static TABLE_NAME = 'Nome_Da_Tabela_Workbench'

	public async create(
		template: Template
	): Promise<void> {
		try {
			await DataBase.connection
			.insert({
				id: template.id,
				name: template.name
			}).into(TemplateDataBase.TABLE_NAME)

		} catch (error) {
			throw new BaseError(error.message || error.sqlMessage)
		}
	}

	// public async create(
	// 	template: Template
	// ): Promise<void> {
	// 	try {
	// 		await DataBase.connection.raw(`INSERT INTO Nome_Da_Tabela_Workbench VALUES (${template.id}, "${template.name}")
	// 		`)

	// 	} catch (error) {
	// 		throw new BaseError(error.message || error.sqlMessage)
	// 	}
	// }

	async getById(id: string): Promise<Template> {

		try {
				const result = await DataBase.connection()
						.select('*')
						.from(TemplateDataBase.TABLE_NAME)
						.where({ id });

				if (!result[0]) {
						throw new BaseError('not found on database');
				}

				return {
						id: result[0].id,
						name: result[0].name
				};

		} catch (error) {
				throw new BaseError(error.message || error.sqlMessage);
		}

		// async getById(id: string): Promise<Template> {

		// 	try {
		// 			const result = await DataBase.connection.raw(`
		// 				SELECT * FROM Nome_Da_Tabela_Workbench WHERE id = ${id}
		// 			`)


		// 			if (!result[0]) {
		// 					throw new BaseError('not found on database');
		// 			}

		// 			return {
		// 					id: result[0].id,
		// 					name: result[0].name
		// 			};

		// 	} catch (error) {
		// 			throw new BaseError(error.message || error.sqlMessage);
		// 	}
}
}
