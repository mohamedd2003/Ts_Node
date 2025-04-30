import express from 'express'
import { dbConnection } from './database/dbconnection'
import userRouter from './src/modules/Users/user.routes'
const app = express()
const port = 3000
app.use(express.json())
app.use(userRouter)
dbConnection()
app.get('/', (req, res) => {
    res.json({message:"hello"})
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))