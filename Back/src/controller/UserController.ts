import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { ICreateContactModel, IDeleteContactModel, IEditContactModel } from "../models/User";

export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) {}

    public getContacts = async (req: Request, res: Response) => {
        try {
            const users = await this.userBusiness.getContacts()
        
            res.status(200).send(users)
            
        } catch (error: any) {
            res.status(error.statusCode || 500).send({message: error.message})
        }
    }

    public createContact = async (req: Request, res: Response) => {
        try {
            const {name, email, phone} = req.body

            const input: ICreateContactModel = {
                name, email, phone
            }

            const response = await this.userBusiness.createContact(input)

            res.status(201).send(response)
            
        } catch (error: any) {
            res.status(error.statusCode || 500).send({message: error.message})
        }
    }

    public editContact = async (req: Request, res: Response) => {
        try {
            const {name, email, phone} = req.body
            
            const { id } = req.params

            const input: IEditContactModel = {
                id,
                name,
                email,
                phone
            }

            const response = await this.userBusiness.editContact(input)
            
            res.status(200).send(response)

        } catch (error: any) {
             res.status(error.statusCode || 500).send({message: error.message})
        }
    }

    public deleteContact = async (req: Request, res: Response) => {
        try {
            const { id } = req.params

            const input: IDeleteContactModel = {
                id
            }

            const response = await this.userBusiness.deleteContact(input)

            res.status(200).send(response)

        } catch (error: any) {
             res.status(error.statusCode || 500).send({message: error.message})
        }
    }
}