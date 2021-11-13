import express, { Router } from "express";
import { getUsers, addUser, editAll, editSomeone, remove, getUser } from "./controllers";
import { middlewareValidateId, middlewareValidateModel } from "./middlewares"
const router = Router()

router.route('/users')
    .get(getUsers)
    .post(addUser)

router.route('/users/:id')
    .all([middlewareValidateId, middlewareValidateModel])
    .get(getUser)
    .put(editAll)
    .patch(editSomeone)
    .delete(remove)

export default router