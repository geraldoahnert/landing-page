import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;
}

export { User };
