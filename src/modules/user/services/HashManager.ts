import dotenv from 'dotenv';
import * as bcrypt from 'bcryptjs';

dotenv.config();

export class HashManager {

    private rounds = Number(process.env.BCRYPT_COST)

    public async hash(text: string): Promise<string> {
        const salt = await bcrypt.genSalt(this.rounds);
        const result = await bcrypt.hash(text, salt);

        return result
    }

    public async compare(
        text: string,
        hash: string
    ): Promise<boolean> {
        return bcrypt.compare(text, hash)
    }
}
