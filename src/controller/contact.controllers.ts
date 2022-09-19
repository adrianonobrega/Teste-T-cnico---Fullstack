import { Request,Response } from "express"
import { contactCreateServices } from "../services/contact/contactCreate.services"
import { contactListService } from "../services/contact/contactList.services"
import { contactOneListService } from "../services/contact/contactOneList.services"
import { contactUpdateService } from "../services/contact/contactUpdate.services"
import { contactDeleteService } from "../services/contact/contactDelete.services"

const contactCreateController = async (req: Request, res: Response) => {
    
    try{
   
           const {id} = req.params
           const {email,phone} = req.body
       
       const contact = await contactCreateServices({id,email,phone})
   
       res.status(201).json(contact)
       }
   
    catch(error){
       if(error instanceof Error){
           return res.status(400).json({
               message: error.message
               })
           }
       }
   }
   

   const contactListController = async (req: Request, res: Response) => {
   
      try{
       const contact = await contactListService()
   
       res.status(200).json(contact)
      }
   
       catch(error){
           if(error instanceof Error){
               return res.status(400).json({
                   message: error.message
               })
           }
       }
   }
   
   const contactListOneController = async (req: Request, res: Response) => {
   
       const {id} = req.params
       try{
        const contact = await contactOneListService(id)
    
        res.status(200).json(contact)
       }
    
        catch(error){
            if(error instanceof Error){
                return res.status(400).json({
                    message: error.message
                })
            }
        }
    }
   
    const contactUpdateController = async (req: Request, res: Response) => {
       
       try{
      
            const {id} = req.params  
            const {email,phone} = req.body
          
          const contact = await contactUpdateService({id,email,phone})
      
          res.status(201).json(contact)
          }
      
       catch(error){
          if(error instanceof Error){
              return res.status(400).json({
                  message: error.message
                  })
              }
          }
      }
   
      const contactDeleteController = async (req: Request, res: Response) => {
   
       const {id} = req.params
       try{
        const contact = await contactDeleteService(id)
    
        res.status(200).json(contact)
       }
    
        catch(error){
            if(error instanceof Error){
                return res.status(400).json({
                    message: error.message
                })
            }
        }
    }
   
   
   export {contactCreateController,contactListController,contactListOneController,contactUpdateController,contactDeleteController}