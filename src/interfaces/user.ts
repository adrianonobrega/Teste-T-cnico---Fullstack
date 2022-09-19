export interface createUser{
    name: string 
    email: string
    phone: string
}

export interface creUser extends createUser{
    id:string
    create_at:Date
    update_at:Date
}

export interface updateUser{
    id:string
    email:string
    phone:string
}