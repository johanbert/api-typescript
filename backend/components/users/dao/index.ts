// DAO = DATA ACCESS OBJECT
import uuidv1 from "uuid";
import moment from "moment";
import {Request, Response} from "express";
import mongoose, { model, Types } from 'mongoose';
import mongoConnect from "../../../common/services/mongodb";
import userModel from "../models";
import { userI } from "../types/user.types";

const User = model<userI>('users', userModel);

export const listUsersDao = async() => {
    try {
        await mongoConnect()
        let users:any = await User.find();
        return users.map( (user:any)=>{
            user.fecha = moment(user.fecha).startOf('day').fromNow();
            return user
        })
    } catch (error) {
        return { error, statusCode: 500 }
    }
}

export const getUserDao = async(id:string) => {
    try {
        await mongoConnect()
        const user:any = await User.findById(id)
        user.fecha = moment(user.fecha).format('YYYY-MM-DD');

        return (!user)
            ? { error: `_id ${id} doesn't exists`, statusCode: 404 }
            : user
    } catch (error) {
        return { error, statusCode: 500 }
    }
}

export const addUserDao = async(jsonUser:any) => {
    try {
        await mongoConnect()
        jsonUser.fecha = new Date();
        const user = new User(jsonUser)
        await user.save()

        return { ok: true }
    } catch (error) {
        return { error, statusCode: 500 }
    }
}

export const editUserAllPropsDao = async(jsonUser:any) => {
    try {
        await mongoConnect()
        const { id } = jsonUser;
        const update = jsonUser;
        const filter = { _id: new mongoose.Types.ObjectId(id) };

        console.log('jsonUser:', jsonUser);
        const user = await User.findOneAndUpdate(filter, update, { new: true });
        console.log('user:',user);
        return (!user)
            ? { error: `_id ${id} doesn't exists`, statusCode: 404 }
            : user
    } catch (error) {
        return { error, statusCode: 500 }
    }
}

export const editUserSomePropsDao = async(jsonUser:any) => {
    try {
        await mongoConnect()
        const { id } = jsonUser;
        const update = jsonUser;
        const filter = { _id: new mongoose.Types.ObjectId(id) };
        delete jsonUser._id
        const user = await User.findOneAndUpdate(filter, update, { new: true });

        return (!user)
            ? { error: `_id ${id} doesn't exists`, statusCode: 404 }
            : user
    } catch (error) {
        return { error, statusCode: 500 }
    }
}

export const removeUserDao = async(id:string) => {
    try {
        await mongoConnect()
        const filter = { _id: new mongoose.Types.ObjectId(id) };
        let response = await User.remove(filter)
        return { ok: true, deletedCount: response.deletedCount }
    } catch (error) {
        return { error, statusCode: 500 }
    }
}