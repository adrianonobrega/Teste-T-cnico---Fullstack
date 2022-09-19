export interface createContact{
    email: string
    phone: string
}

export interface creContact extends createContact{
    id:string
    create_at:Date
    update_at:Date
}