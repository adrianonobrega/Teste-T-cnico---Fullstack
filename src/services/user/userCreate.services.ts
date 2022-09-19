import { createUser } from "../../interfaces/user";
import { AppDataSource } from "../../database";
import { User } from "../../entities/user.entity";

export const userCreateServices = async ({name, email,phone}: createUser) => {

    const userRepository = AppDataSource.getRepository(User) 
    
    const users = await userRepository.find()

    const alreadyExistsEmail = users.find((user) => user.email === email)
 
    if(alreadyExistsEmail){
      throw new Error("Email already exists")
    }

    const user = new User()
    user.id = user.id
    user.name = name
    user.email = email
    user.phone = phone
    user.created_at = user.created_at
    userRepository.save(user)

    return user
}
