import { userLogin } from "../../interfaces/user";
import { AppDataSource } from "../../database";
import { User } from "../../entities/user.entity";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const userLoginServices = async({email,password}: userLogin) => {
    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find()

    const user = users.find((user) => user.email === email)

    if(!user){
        throw new Error("Wrong email/password")
    }

    if(!bcrypt.compareSync(password,user.password)){
        throw new Error("Wrong email/password")
    }

   
    const token = {
       
        user_id : user.id,
        token:  jwt.sign(
            {email:email},
            String(process.env.JWT_SECRET),
            {expiresIn: '1d'}
        )
    }
       return token
    
}