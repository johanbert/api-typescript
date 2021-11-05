import uuidv1 from "uuid";
import {Request, Response} from "express";
import mongoose, { model, Types } from 'mongoose';
import mongoConnect from "../../../common/services/mongodb";
import userModel from "../models";
import { userI } from "../types/user.types";

const User = model<userI>('users', userModel);

export const getUsers = async(req:Request, res: Response) => {
    try {
        await mongoConnect()
        const users = await User.find();
        res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

export const addUser = async(req:Request, res: Response) => {
    try {
        await mongoConnect()
        req.body.fecha = new Date();
        const user = new User(req.body)
        await user.save()

        res.status(200).json({ ok: true })
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

export const editAll = async(req:Request, res: Response) => {
    try {
        await mongoConnect()
        const { body } = req;
        const filter = { _id: new mongoose.Types.ObjectId(req.params.id) };
        const update = body;

        const doc = await User.findOneAndUpdate(filter, update, { new: true });

        if (!doc)
            return res.status(404).json({ message: `_id ${req.params.id} doesn't exists` })

        res.status(200).json(doc)
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

export const editSomeone = async(req:Request, res: Response) => {
    try {
        await mongoConnect()
        const { body } = req;
        const filter = { _id: new mongoose.Types.ObjectId(req.params.id) };
        const update = body;
        delete body._id
        const doc = await User.findOneAndUpdate(filter, update, { new: true });

        if (!doc)
            return res.status(404).json({ message: `_id ${req.params.id} doesn't exists` })

        res.status(200).json(doc)
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

export const remove = async(req:Request, res: Response) => {
    try {
        await mongoConnect()
        const filter = { _id: new mongoose.Types.ObjectId(req.params.id) };
        let response = await User.remove(filter)
        res.status(200).json({ OK: true, deletedCount: response.deletedCount })
    } catch (error) {
        return res.status(500).json({ message: error })
    }
}

// export default { getUsers, addUser, editAll, editSomeone, remove }