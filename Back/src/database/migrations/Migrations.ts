import client from "../../app"

class Migrations {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error) {
            console.log("FAILED! Error in migrations...")
            if (error instanceof Error) {
                console.log(error.message)
            }
        } finally {
            console.log("Ending connection...")
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await client.query(`
        DROP TABLE IF EXISTS contacts;
        
        CREATE TABLE IF NOT EXISTS contacts(
            id serial PRIMARY KEY,
            name VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(55) NOT NULL,
            phone VARCHAR(20) NOT NULL);
        `)
    }

    insertData = async () => {
        await client.query(`
        INSERT INTO contacts(name, email, phone)
	    VALUES ('João', 'João@outlook.com', '35 99945-4789');

        INSERT INTO contacts(name, email, phone)
	    VALUES ('Maria', 'Maria@outlook.com', '11 99890-4578');

        INSERT INTO contacts(name, email, phone)
	    VALUES ('Amanda', 'Amanda@outlook.com', '71 99450-5071');

        INSERT INTO contacts(name, email, phone)
	    VALUES ('Alex', 'Alex@outlook.com', '38 99430-6091');
        `)
    }
}

const migrations = new Migrations()
migrations.execute()