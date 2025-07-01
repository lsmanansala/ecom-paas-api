import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/user.model'

export interface AuthRequest extends Request {
  user?: any
}

export const protect = async (req: AuthRequest, res: Response, next: NextFunction): Promise<any> => {
  let token = req.headers.authorization?.split(' ')[1]
  const secret = process.env.JWT_SECRET || 'ultron-secret'

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' })
  }

  try {
    const decoded = jwt.verify(token, secret) as { id: string }
    req.user = await User.findById(decoded.id).select('-password')
    next()
  } catch (err) {
    return res.status(401).json({ message: 'Token is not valid' })
  }
}
