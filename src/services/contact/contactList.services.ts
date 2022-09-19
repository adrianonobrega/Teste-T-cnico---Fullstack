import { AppDataSource } from "../../database"
import { Contact } from "../../entities/contact.entity"

export const contactListService = async () => {

    const contactRepository = AppDataSource.getRepository(Contact)

    const contact = contactRepository.find()

    return contact
}
