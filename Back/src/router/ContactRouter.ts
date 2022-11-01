import { Router } from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { UserController } from '../controller/UserController'
import { UserDatabase } from '../database/UserDatabase'

export const contactRouter = Router()

const userController = new UserController(
    new UserBusiness(
      new UserDatabase()
    )
  )

contactRouter.get("/getContacts", userController.getContacts)
contactRouter.post("/createContact", userController.createContact)
contactRouter.put("/editContact/:id", userController.editContact)
contactRouter.delete("/deleteContact/:id", userController.deleteContact)