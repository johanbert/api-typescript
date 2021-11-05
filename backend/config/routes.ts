import express from "express";
import usersEndpoints from "../components/users/routes";

const GLOBAL_PATH = '/api/v1'
const app = express()

app.use(GLOBAL_PATH, usersEndpoints)

export default app