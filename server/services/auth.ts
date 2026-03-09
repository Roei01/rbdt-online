import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { config } from '../config/env';
import { User } from '../../models/User';

export const generateTempPassword = (length = 10): string => {
  return crypto.randomBytes(length).toString('hex').slice(0, length);
};

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(password, hash);
};

export const generateToken = (payload: any): string => {
  return jwt.sign(payload, config.jwtSecret, { expiresIn: '24h' });
};

export const verifyToken = (token: string): any => {
  return jwt.verify(token, config.jwtSecret);
};

// Check if IP is allowed (for future logins)
export const checkIpAccess = async (userId: string, currentIp: string): Promise<boolean> => {
  const user = await User.findById(userId);
  if (!user) return false;

  // If no IP stored, store current IP and allow
  if (!user.ipAddress) {
    user.ipAddress = currentIp;
    await user.save();
    return true;
  }

  // If IP matches stored IP, allow
  return user.ipAddress === currentIp;
};
