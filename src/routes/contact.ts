import { Router } from "express";
import { contactCreateController } from "../controller/contact.controllers";
import { contactListController } from "../controller/contact.controllers";
import { contactListOneController } from "../controller/contact.controllers";
import { contactUpdateController } from "../controller/contact.controllers";
import { contactDeleteController } from "../controller/contact.controllers";

export const contactRoutes = Router()

contactRoutes.post("/:id",contactCreateController)
contactRoutes.get("/",contactListController)
contactRoutes.patch("/:id",contactUpdateController)
contactRoutes.delete("/:id",contactDeleteController)
contactRoutes.get("/:id",contactListOneController)