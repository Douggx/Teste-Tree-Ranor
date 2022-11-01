import { IEditContactModel, User } from "../models/User"
import client from "../app"

export class UserDatabase {

    public getContacts = async () => {
        const result = await client.query('SELECT * from contacts')
        return result.rows
    }

    public async createContact(user: User) {
        await client.query(
            `INSERT INTO contacts 
          ("name", "email", "phone") 
          VALUES ('${user.getName()}','${user.getEmail()}', '${user.getPhone()}')`
        )
    }

    public editContact = async (input: IEditContactModel) => {
        await client.query(
            `UPDATE "contacts" 
          SET name = '${input.name}', email = '${input.email}', phone = '${input.phone}' 
          WHERE id = ${input.id}`
        )
    }

    public deleteContact = async (id: string) => {
        await client.query(
            `DELETE FROM contacts WHERE id=${id}`
            )
    }

}