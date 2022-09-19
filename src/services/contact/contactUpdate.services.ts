import { AppDataSource } from "../../database"
import { User } from "../../entities/user.entity"
import { createContact } from "../../interfaces/contact"
import { Contact } from "../../entities/contact.entity"

export const contactUpdateService = async ({id,email,phone}: createContact) => {

    const contactRepository = AppDataSource.getRepository(Contact) 

    const contactOne = await contactRepository.findOne({
        where:{
            id:id
        }
    })
  
    if(!contactOne){
        throw new Error("Contact not found")
    }

    const contact = new Contact()
    contact.id = contact.id
    contact.email = email || contact.email
    contact.phone = phone || contact.phone
   
    await contactRepository.createQueryBuilder().update(contact).set(contact).where("id = :id", {id: id}).execute()

    return contact

}
