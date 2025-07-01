import jwt from 'jsonwebtoken';

export const generateToken = (userId: string) => {
  const secret = process.env.JWT_SECRET || 'f0r0nes'
  return jwt.sign({ id: userId }, secret, { expiresIn: '7d' })
}