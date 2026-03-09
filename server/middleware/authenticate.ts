import { Request, Response, NextFunction } from 'express';
import { verifyToken, checkIpAccess } from '../services/auth';

interface AuthRequest extends Request {
  user?: any;
}

export const authenticate = async (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded;

    // Check IP restriction
    const currentIp = req.ip || req.socket.remoteAddress || '127.0.0.1';
    const isAllowed = await checkIpAccess(decoded.userId, currentIp as string);

    if (!isAllowed) {
      return res.status(403).json({ message: 'Access denied: Invalid IP address. Login from original device required.' });
    }

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};
