import { Router } from "express";


export const userRoutes = Router()

userRoutes.post("/")
userRoutes.post("/address")
userRoutes.get("/")
userRoutes.patch("/:id")
userRoutes.delete("/:id")
userRoutes.get("/:id")