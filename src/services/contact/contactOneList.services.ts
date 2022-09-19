import { AppDataSource } from "../../database"
import { Contact } from "../../entities/contact.entity"

export const contactOneListService = async (id:string) => {

    const contactRepository = AppDataSource.getRepository(Contact)

    const contact = await contactRepository.findOne({
        where: {
            id:id
        }
    })

    if(!contact){
        throw new Error("Contact not found")
    }
    
    return contact
}
