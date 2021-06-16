import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("emails")
class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column
    email: string;
}

export default Email;
