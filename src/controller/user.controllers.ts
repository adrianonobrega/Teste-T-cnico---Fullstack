import { Request,Response } from "express"
import { userCreateServices } from "../services/userCreate.services"
import {userListService} from "../services/userList.services"
import { userOneListService } from "../services/userOneList.services"
import { userUpdateService } from "../services/userUpdate.services"
import { userDeleteService } from "../services/userDelete.services"

const userCreateController = async (req: Request, res: Response) => {
    
    try{
   
           
           const {name, email,phone} = req.body
       
       const newUser = await userCreateServices({name, email,phone})
   
       res.status(201).json(newUser)
       }
   
    catch(error){
       if(error instanceof Error){
           return res.status(400).json({
               message: error.message
               })
           }
       }
   }
   

   const userListController = async (req: Request, res: Response) => {
   
      try{
       const users = await userListService()
   
       res.status(200).json(users)
      }
   
       catch(error){
           if(error instanceof Error){
               return res.status(400).json({
                   message: error.message
               })
           }
       }
   }
   
   const userListOneController = async (req: Request, res: Response) => {
   
       const {id} = req.params
       try{
        const users = await userOneListService(id)
    
        res.status(200).json(users)
       }
    
        catch(error){
            if(error instanceof Error){
                return res.status(400).json({
                    message: error.message
                })
            }
        }
    }
   
    const userUpdateController = async (req: Request, res: Response) => {
       
       try{
      
            const {id} = req.params  
            const {email,phone} = req.body
          
          const newUser = await userUpdateService({id,email,phone})
      
          res.status(201).json(newUser)
          }
      
       catch(error){
          if(error instanceof Error){
              return res.status(400).json({
                  message: error.message
                  })
              }
          }
      }
   
      const userDeleteController = async (req: Request, res: Response) => {
   
       const {id} = req.params
       try{
        const users = await userDeleteService(id)
    
        res.status(200).json(users)
       }
    
        catch(error){
            if(error instanceof Error){
                return res.status(400).json({
                    message: error.message
                })
            }
        }
    }
   
   
   export {userCreateController,userListController,userListOneController,userUpdateController,userDeleteController}