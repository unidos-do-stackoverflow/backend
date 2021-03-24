import { Request, Response } from 'express';

class TemplateController {
	public async post(req: Request, res: Response): Promise<Response> {
		const { data } = req.body;

		return res.json(data);
	}
}

export default TemplateController;
