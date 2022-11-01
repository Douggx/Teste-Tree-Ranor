import { UserDatabase } from "../database/UserDatabase"
import { ParamsError } from "../errors/ParamsError"
import { ICreateContactModel, IDeleteContactModel, IEditContactModel, User } from "../models/User"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase
    ) { }

    public getContacts = async () => {
        const response = await this.userDatabase.getContacts()
        return response
    }

    public createContact = async (input: ICreateContactModel) => {
        const { name, email, phone } = input

        if (typeof name !== "string") {
            throw new ParamsError("Parâmetro 'name' inválido: deve ser uma string")
        }

        if (typeof email !== "string") {
            throw new ParamsError("Parâmetro 'email' inválido: deve ser uma string")
        }

        if (typeof phone !== "string") {
            throw new ParamsError("Parâmetro 'password' inválido: deve ser uma string")
        }

        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            throw new ParamsError("Parâmetro 'email' inválido")
        }

        if (phone.length < 11) {
            throw new ParamsError("Parâmetro 'phone' inválido: mínimo de 11 caracteres")
        }

        const user = new User(name, email, phone)

        await this.userDatabase.createContact(user)

        const response = {
            message: `Contato ${user.getName()} criado com sucesso!`
        }

        return response
    }

    public editContact = async (input: IEditContactModel) => {

        const { id, name, email, phone } = input

        await this.userDatabase.editContact(input)

        const response: any = {
            message: `O usuario foi editado com sucesso!`
        }

        return response
    }

    public deleteContact = async (input: IDeleteContactModel) => {

        const { id } = input


        await this.userDatabase.deleteContact(id)

        const response = {
            message: `O usuario foi deletado com sucesso!`
        };

        return response
    }

}