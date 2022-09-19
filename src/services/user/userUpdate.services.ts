import { AppDataSource } from "../../database"
import { User } from "../../entities/user.entity"
import { updateUser } from "../../interfaces/user"

export const userUpdateService = async ({id,email,phone}: updateUser) => {

    const userRepository = AppDataSource.getRepository(User) 

    const findUser = await userRepository.findOne({
        where:{
            id:id
        }
    })
  
    if(!findUser){
        throw new Error("User not found")
    }

    const user = new User()
    user.id = user.id
    user.email = email || user.email
    user.phone = phone || user.phone
   
    await userRepository.createQueryBuilder().update(user).set(user).where("id = :id", {id: id}).execute()

    return user

}
