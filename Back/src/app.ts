import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const { Pool } = pg;

const client = new Pool({
    user: "postgres",
    password: process.env.PASSWORD,
    host: 'localhost',
    port: 5432,
    database: 'postgres'
});

export default client;