import express from 'express';
import { User } from '../../models/User';
import { checkIpAccess, comparePassword, generateToken } from '../services/auth';

const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const isMatch = await comparePassword(password, user.passwordHash);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Check IP restriction (first login sets IP)
  const isAllowed = await checkIpAccess(user._id, req.ip || req.socket.remoteAddress || '127.0.0.1');
  if (!isAllowed) {
    return res.status(403).json({ message: 'Access denied: New location detected.' });
  }

  const token = generateToken({ userId: user._id, username: user.username });
  
  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  });

  res.json({ token, username: user.username });
});

export default router;
