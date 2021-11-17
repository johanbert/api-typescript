import {Request, Response} from "express";
import {listUsersService, getUserService, addUserService, editUserAllPropsService, editUserSomePropsService, removeUserService} from '../services';

export const listUsersHandler = async(req:Request, res: Response) => {
    const users = await listUsersService();
    
    return (!users.error)
        ? res.status(200).json(users) 
        : res.status(users.statusCode).json({ error: users.error })
}

export const getUserHandler = async(req:Request, res: Response) => {
    const { id } = req.params;
    const user = await getUserService(id);

    return (!user.error)
        ? res.status(200).json(user) 
        : res.status(user.statusCode).json({ error: user.error })
}

export const addUserHandler = async(req:Request, res: Response) => {
    const response:any = await addUserService(req.body)
    const {error, statusCode } = response
    return (!error)
        ? res.status(200).json(response) 
        : res.status(statusCode).json({ error })
}

export const editUserAllPropsHandler = async(req:Request, res: Response) => {
    const user:any = await editUserAllPropsService(req.body);
    const {error, statusCode } = user
    return (!error)
        ? res.status(200).json(user) 
        : res.status(statusCode).json({ error })
}

export const editUserSomePropsHandler = async(req:Request, res: Response) => {
    const user:any = await editUserSomePropsService(req.body);
    const {error, statusCode } = user
    return (!error)
        ? res.status(200).json(user) 
        : res.status(statusCode).json({ error })
}

export const removeUserHandler = async(req:Request, res: Response) => {
    const response:any = await removeUserService(req.body);
    const {error, statusCode } = response
    return (!error)
        ? res.status(200).json(response) 
        : res.status(statusCode).json({ error })
}
