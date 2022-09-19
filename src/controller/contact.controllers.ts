import { Request,Response } from "express"
import { contactCreateServices } from "../services/contact/contactCreate.services"
import { contactListService } from "../services/contact/contactList.services"

const contactCreateController = async (req: Request, res: Response) => {
    
    try{
   
           const {id} = req.params
           const {email,phone} = req.body
       
       const newUser = await contactCreateServices({id,email,phone})
   
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
   

   const contactListController = async (req: Request, res: Response) => {
   
      try{
       const users = await contactListService()
   
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
   
//    const contactListOneController = async (req: Request, res: Response) => {
   
//        const {id} = req.params
//        try{
//         const users = await userOneListService(id)
    
//         res.status(200).json(users)
//        }
    
//         catch(error){
//             if(error instanceof Error){
//                 return res.status(400).json({
//                     message: error.message
//                 })
//             }
//         }
//     }
   
//     const contactUpdateController = async (req: Request, res: Response) => {
       
//        try{
      
//             const {id} = req.params  
//             const {email,phone} = req.body
          
//           const newUser = await userUpdateService({id,email,phone})
      
//           res.status(201).json(newUser)
//           }
      
//        catch(error){
//           if(error instanceof Error){
//               return res.status(400).json({
//                   message: error.message
//                   })
//               }
//           }
//       }
   
//       const contactDeleteController = async (req: Request, res: Response) => {
   
//        const {id} = req.params
//        try{
//         const users = await userDeleteService(id)
    
//         res.status(200).json(users)
//        }
    
//         catch(error){
//             if(error instanceof Error){
//                 return res.status(400).json({
//                     message: error.message
//                 })
//             }
//         }
//     }
   
   
   export {contactCreateController,contactListController}