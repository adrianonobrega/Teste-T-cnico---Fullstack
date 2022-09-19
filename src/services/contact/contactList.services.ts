import { AppDataSource } from "../../database"
import { Contact } from "../../entities/contact.entity"

export const contactListService = async () => {

    const contactRepository = AppDataSource.getRepository(Contact)

    const contact = contactRepository.find()

    if(!contact){
        throw new Error("Email already exists")
      }

    return contact
}
