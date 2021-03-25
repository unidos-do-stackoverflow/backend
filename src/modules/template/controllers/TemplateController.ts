import { Request, Response } from 'express';

class TemplateController {
	public async get(req: Request, res: Response): Promise<Response> {
		return res.status(200).json({
			success: true,
			message: 'Rota template funcionando!',
		});
	}

	public async post(req: Request, res: Response): Promise<Response> {
		const { data } = req.body;

		return res.json(data);
	}
}

export default TemplateController;
