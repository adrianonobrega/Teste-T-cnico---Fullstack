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

const user : createUser = {
    name : "Adriano Nóbrega",
    email : "adriano26911@gmail.com",
    password : "1234",
    phone : "83 9998358056",
}

const contact : createContact = {
    name : "jose",
    email: "oioi26926@gmail.com",
    phone: "839999999999",
    user_id:""
}


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

    

    // test("delete user",async() => {
    //     const newUser = await userCreateServices(user)
        
    //     const response = await request(app).delete(`users/${newUser.id}`)
    //     expect(response.body).stat
    // })
    

})