import { createContact } from "../../interfaces/contact";
import { AppDataSource } from "../../database";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";

export const contactCreateServices = async ({id,email,phone,name}: createContact) => {

    const contactRepository = AppDataSource.getRepository(Contact)
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            id:id
        }
    })

    const contacts = await contactRepository.find()
    const alreadyExistsEmail = contacts.find((contact) => contact.email === email)
    const phoneExistsEmail = contacts.find((contact) => contact.phone === phone)

    if(!user){
        throw new Error("user already exists")
      }
 
    if(alreadyExistsEmail){
      throw new Error("Email already exists")
    }

    if(phoneExistsEmail){
        throw new Error("Phone already exists")
      }
    
      const contact = new Contact()
      contact.user = user
      contact.name = name
      contact.email = email
      contact.phone = phone
      contactRepository.save(contact)
      
      return contact
}
