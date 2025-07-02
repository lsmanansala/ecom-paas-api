import { IUser } from './../interfaces/user.interface';
import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['customer', 'admin'],
    default: 'customer',
  },
}, { timestamps: true })

const User = mongoose.model<IUser>('User', userSchema)

export default User
