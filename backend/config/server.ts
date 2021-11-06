import express from "express";
import helmet from "helmet";
import cors from "cors";
import routes from "./routes";

const app = express()
const PATH = '/'

app.use(helmet())
app.use(cors())
app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
app.use(PATH, routes) 

export default app