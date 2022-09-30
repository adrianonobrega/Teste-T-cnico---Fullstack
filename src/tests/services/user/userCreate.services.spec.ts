import {userCreateServices} from "../../../services/user/userCreate.services"
import { DataSource } from "typeorm";
import {AppDataSource} from "../../../database"
import { v4 as uuidv4 } from 'uuid';
import {createUser} from "../../../interfaces/user"


describe("Create an user",() => {
    let connection : DataSource;

    beforeAll(async () => {
        await AppDataSource.initialize()
        .then((res) => (connection = res))
        .catch((err) => {
            console.error("Error during Data Source initialization",err)
        })
    })

    afterAll(async() => {
        await connection.destroy()
    })

    test("Should be able to create user", async () => {

        const userData : createUser = {
             name : "Adriano Nóbrega",
             email : "adrianono@gmail.com",
             password : "1234",
             phone : "83 998458056",
        }
        
        const newUser = await userCreateServices(userData)

        expect(newUser).toHaveProperty("id")
        expect(newUser.name).toBe("Adriano Nóbrega")
        expect(newUser).not.toHaveProperty("password")



    })
})