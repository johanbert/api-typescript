import { ObjectId, ObjectIdLike } from "bson";
import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import userModel from "../models";
import { userI } from "../types/user.types";

export const middlewareValidateId = async(req: Request, res:Response, next:NextFunction) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id))
            return res.status(403).json({ message: `MIDDLEWARE: invalid Format _id ${req.params.id}` })
        next()
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

export const middlewareValidateModel = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const { body } = req;
        const newBody: {[key:string]: string} = {};

        // Validamos si tiene todas las propiedades del modelo userModel y hacemos reasignacion
        for (const key in body) {
            if (!userModel.obj.hasOwnProperty(key)) {
                return res.status(403).json({ message: `MIDDLEWARE: Your body properties doesn't allowed` })
            }
            newBody[key] = body[key]
        }

        next()
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

