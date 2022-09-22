import { Router } from "express";
import { userCreateController } from "../controller/user.controllers";
import { userListController } from "../controller/user.controllers";
import { userListOneController } from "../controller/user.controllers";
import { userUpdateController } from "../controller/user.controllers";
import { userDeleteController } from "../controller/user.controllers";
import { userLoginController} from "../controller/user.controllers";


export const userRoutes = Router()

userRoutes.post("/",userCreateController)
userRoutes.post("/login",userLoginController)
userRoutes.get("/",userListController)
userRoutes.patch("/:id",userUpdateController)
userRoutes.delete("/:id",userDeleteController)
userRoutes.get("/:id",userListOneController)