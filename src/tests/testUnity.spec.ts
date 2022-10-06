import {userCreateServices} from "../services/user/userCreate.services"
import { DataSource } from "typeorm";
import {AppDataSource} from "../database"
import { v4 as uuidv4 } from 'uuid';
import {createUser} from "../interfaces/user"
import {v4 as uuid} from "uuid"
import {userDeleteService} from "../services/user/userDelete.services"
import {createContact} from "../interfaces/contact"
import request from "supertest"
import app from "../app"
import { contactCreateServices } from "../services/contact/contactCreate.services";
import {userLoginServices} from "../services/user/userLogin.services"
import {contactDeleteService} from "../services/contact/contactDelete.services"

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

    test("Should be able to create user and contact", async () => {

        const userData : createUser = {
             name : "Adriano Nóbrega",
             email : "adriano26911@gmail.com",
             password : "1234",
             phone : "83 9998358056",
        }
        
        const newUser = await userCreateServices(userData)

        const contact : createContact = {
            name : "jose",
            email: "oioi26926@gmail.com",
            phone: "839999999999",
            user_id:newUser.id
        }

        const newContact = await contactCreateServices(contact)

        expect(newUser).toHaveProperty("id")
        expect(newContact).toHaveProperty("id")
        expect(newUser.name).toBe("Adriano Nóbrega")
        expect(newContact.name).toBe("jose")
        expect(newUser).not.toHaveProperty("password")
        

    })

    
    test("Should be able to thown an error in case of user not found",async() => {
        try{
            const userId = uuidv4()
            await userDeleteService(userId)

        }
        catch(error){
            if(error instanceof Error){
                expect(error.message).toBe("User not found")
            }
        }
    })

    test("Should be able to thown an error in case of contact not found",async() => {
        try{
            const contactId = uuidv4()
            await contactDeleteService(contactId)

        }
        catch(error){
            if(error instanceof Error){
                expect(error.message).toBe("Contact not found")
            }
        }
    })

    test("Should be able to Login", async () => {

        const userData : createUser = {
             name : "Adriano Nóbrega",
             email : "adrian45o26911@gmail.com",
             password : "1234",
             phone : "83 9998358056",
        }
        
        const newUser = await userCreateServices(userData)

        const userLogin = {
            email : "adrian45o26911@gmail.com",
            password : "1234",
        }

        const login = await userLoginServices(userLogin)

        expect(login).toHaveProperty("token")
        expect(login).toHaveProperty("user_id")
    })
   

})