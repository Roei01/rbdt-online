import express from 'express';
import purchaseRoutes from './purchase';
import videoRoutes from './video';
import authRoutes from './auth';

const router = express.Router();

router.use('/purchase', purchaseRoutes);
router.use('/video', videoRoutes);
router.use('/auth', authRoutes);

export default router;
