import { Entity, Column,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity("contact")
export class Contact{
    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column()
    email: string

    @Column()
    phone: string

    @CreateDateColumn()
    created_at: Date
    
    @UpdateDateColumn()
    updated_at: Date

    @ManyToOne(() => User, user => user.contact,{onDelete:'CASCADE'})
    user: User
}