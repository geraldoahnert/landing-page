import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/User';
import { UserService } from '../services/UserService';

class EmailController {
    async handle(req: Request, res: Response) {
        const repository = getRepository(User);

        const { email } = req.body;

        const userService = new UserService();

        const user = await userService.execute({
            email,
        });

        return res.json(user);

        // Service

        // const userExists = await repository.findOne({ where: { email } });

        // if (userExists) {
        //     return res.sendStatus(409);
        // }

        // const user = repository.create({ email });

        // await repository.save(user);

        // return res.json(user);
    }
}

export default new EmailController();
