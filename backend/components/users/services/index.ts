import {listUsersDao, getUserDao, addUserDao, editUserAllPropsDao, editUserSomePropsDao, removeUserDao,} from '../dao';

export const listUsersService = async() => {
    return await listUsersDao();
}

export const getUserService = async(id:string) => {
    return await getUserDao(id);
}

export const addUserService = async(jsonUser:any) => {
    return await addUserDao(jsonUser);
}

export const editUserAllPropsService = async(jsonUser:any) => {
    return await editUserAllPropsDao(jsonUser);
}

export const editUserSomePropsService = async(jsonUser:any) => {
    return await editUserSomePropsDao(jsonUser);
   
}

export const removeUserService = async(id:string) => {
   return await removeUserDao(id)
}
