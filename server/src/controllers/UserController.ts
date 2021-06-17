import { Request, Response } from "express";
import { getRepository } from "typeorm";
import User from "../models/User";

class EmailController {
    async store(req: Request, res: Response) {
        const repository = getRepository(User);

        const { email } = req.body;

        const userExists = await repository.findOne({ where: { email } });

        if (userExists) {
            return res.sendStatus(409);
        }

        const user = repository.create({ email });

        await repository.save(user);

        return res.json(user);
    }
}

export default new EmailController();
