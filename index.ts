import express from 'express'
import { dbConnection } from './database/dbconnection'
const app = express()
const port = 3000
app.use(express.json())
dbConnection()
app.get('/', (req, res) => {
    res.json({message:"hello"})
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))