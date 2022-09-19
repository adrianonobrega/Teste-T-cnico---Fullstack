import { Router } from "express";
import { contactCreateController } from "../controller/contact.controllers";

export const contactRoutes = Router()

contactRoutes.post("/:id",contactCreateController)
contactRoutes.get("/")
contactRoutes.patch("/:id")
contactRoutes.delete("/:id")
contactRoutes.get("/:id")