import { User } from "../entities/user.entity"

export interface createContact{
    id:string
    email: string
    phone: string
    
}

export interface creContact extends createContact{
    id:string
    create_at:Date
    update_at:Date
}