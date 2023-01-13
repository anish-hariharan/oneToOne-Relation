import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn({
        type: 'int'
    })
    id: number

    @Column({
        type:'varchar'
    })
    name: string

    @Column({
        type: 'int'
    })
    age: number
}