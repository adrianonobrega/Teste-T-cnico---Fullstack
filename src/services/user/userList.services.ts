import { AppDataSource } from "../../database"
import { User } from "../../entities/user.entity"

export const userListService = async () => {

    const userRepository = AppDataSource.getRepository(User)

    const users = userRepository.find()

    if(!users){
        throw new Error("Email already exists")
      }

    return users
}
