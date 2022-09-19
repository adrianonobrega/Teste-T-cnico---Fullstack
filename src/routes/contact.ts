import { Router } from "express";


export const contactRoutes = Router()

contactRoutes.post("/")
contactRoutes.post("/address")
contactRoutes.get("/")
contactRoutes.patch("/:id")
contactRoutes.delete("/:id")
contactRoutes.get("/:id")