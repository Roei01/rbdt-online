import express from 'express';
import purchaseRoutes from './purchase';
import videoRoutes from './video';
import authRoutes from './auth';
import newsletterRoutes from './newsletter';

const router = express.Router();

router.use('/purchase', purchaseRoutes);
router.use('/video', videoRoutes);
router.use('/auth', authRoutes);
router.use('/newsletter', newsletterRoutes);

export default router;
