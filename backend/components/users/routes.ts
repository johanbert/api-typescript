import express, { Router } from "express";
import { getUsers, addUser, editAll, editSomeone, remove } from "./controllers";
import { middlewareValidateId, middlewareValidateModel } from "./middlewares"
const router = Router()

router.route('/users')
    .get(getUsers)
    .post(addUser)

router.route('/users/:id')
    .all([middlewareValidateId, middlewareValidateModel])
    .put(editAll)
    .patch(editSomeone)
    .delete(remove)

export default router