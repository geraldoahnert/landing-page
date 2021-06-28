import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';

interface IUser {
    email: string;
}

class UserService {
    async execute({ email }: IUser) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        const userExists = await usersRepositories.findOne({
            where: { email },
        });

        if (userExists) {
            throw new Error('Email already exists!');
        }

        const user = usersRepositories.create({ email });

        await usersRepositories.save(user);

        return user;
    }
}

export { UserService };
