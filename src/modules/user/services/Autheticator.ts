import dotenv from "dotenv";
import * as jwt from "jsonwebtoken";
import { IAuthentication } from '../interfaces/IAuthenticator';

dotenv.config();

export class Authenticator {

	public generate(
			input: IAuthentication,
			expiresIn = Number(process.env.JWT_EXPIRES_IN)
	): string {
			const token = jwt.sign(
					input,
					process.env.JWT_KEY as string,
					{
							expiresIn,
					}
			);

			return token
	}

	public getToken(
			token: string
	): IAuthentication {

			const payload = jwt.verify(
					token, process.env.JWT_KEY as string
			) as IAuthentication;

			const result = {
					id: payload.id,
			}

			return result
	}
}
