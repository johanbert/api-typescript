import express, { Router } from "express";
import { listUsersHandler,getUserHandler, addUserHandler, editUserAllPropsHandler, editUserSomePropsHandler, removeUserHandler } from "./controllers";
import { middlewareValidateId, middlewareValidateModel } from "./middlewares"
const router = Router()

router.route('/users')
    .get(listUsersHandler)
    .post(addUserHandler)

router.route('/users/:id')
    .all([middlewareValidateId, middlewareValidateModel])
    .get(getUserHandler)
    .put(editUserAllPropsHandler)
    .patch(editUserSomePropsHandler)
    .delete(removeUserHandler)

export default router