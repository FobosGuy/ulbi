import process from "node:process"
import { configDotenv } from "dotenv"
import express from "express"

import { client, pool } from "./database.js";

// Environment variables
configDotenv()
const PORT = process.env.PORT || 5000;

// App settings
const app = express()
app.use(express.json())

app.post('/', (req, res) => {
    console.log(req.body)
    res.status(200).json('Server is functioning!')
})

// StartApp function
async function startApp() {
    try {
        await client.connect()
        app.listen(PORT, () => console.log(`SERVER IS STARTED ON PORT ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

// Main
startApp()