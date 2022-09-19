import { createContact } from "../../interfaces/contact";
import { AppDataSource } from "../../database";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";

export const contactCreateServices = async ({id,email,phone}: createContact) => {

    const contactRepository = AppDataSource.getRepository(Contact)
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            id:id
        }
    })

    

    const users = await userRepository.find()
    const alreadyExistsEmail = users.find((user) => user.email === email)
    const phoneExistsEmail = users.find((user) => user.phone === phone)

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
      contact.email = email
      contact.phone = phone
      contactRepository.save(contact)
      
      return contact
}
