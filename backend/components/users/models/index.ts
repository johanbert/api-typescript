import { userI } from "../types/user.types"
import { Schema } from 'mongoose';

const userModel = new Schema<userI>({
    nombre: String,
    edad: Number,
    fecha: String,
  });

export default userModel