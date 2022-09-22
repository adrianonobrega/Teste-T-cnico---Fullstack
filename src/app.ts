import express from 'express'
import { AppDataSource } from './database'
import { router } from './routes'

const app = express()

app.use(express.json())

app.use(router)

AppDataSource.initialize()
    .then(() => {
        console.log("DB teste_tecnico initialized")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })


app.listen( process.env.PORT || 3000,() => console.log("rodando liso"))

export default app