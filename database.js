import process from "node:process"
import { configDotenv } from "dotenv"
import pkg from "pg"

configDotenv()
const db = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
}

// Database settings
const { Client, Pool } = pkg

export const client = new Client(db)
export const pool = new Pool(db)