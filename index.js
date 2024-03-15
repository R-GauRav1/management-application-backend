import express from 'express'
import bodyParser from 'body-parser'
import web from './Router/taskRouter.js'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000

// middle-ware to parse JSON request body
app.use(bodyParser.json())
app.use(cors())
app.use('/', web)

app.listen(PORT, () => {
    console.log(`App is Running At http://localhost:${PORT}`)
})