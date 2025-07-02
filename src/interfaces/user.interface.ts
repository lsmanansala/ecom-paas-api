import mongoose, { Document, Schema } from 'mongoose'

export interface IUser extends Document {
  _id: string | number;
  name: string
  email: string
  password: string
  role: 'customer' | 'admin'
}