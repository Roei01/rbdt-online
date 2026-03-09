import express from 'express';
import { Purchase } from '../../models/Purchase';
import { User } from '../../models/User';
import { createPayment } from '../services/payment';
import { sendAccessEmail } from '../services/email';
import { generateTempPassword, hashPassword, generateToken } from '../services/auth';

const router = express.Router();

// Mock video price
const VIDEO_PRICE = 49.00;
const VIDEO_ID = 'video_001';

router.post('/create', async (req, res) => {
  try {
    const { email } = req.body;
    
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      // User already bought?
      const existingPurchase = await Purchase.findOne({ userId: user._id, videoId: VIDEO_ID, status: 'completed' });
      if (existingPurchase) {
        return res.status(400).json({ message: 'You already own this video. Check your email for access.' });
      }
    } else {
      // Create pending user or wait until payment success
      // Typically create user AFTER payment success, but need user ID for purchase record
      // We can create a temporary user or just store email in purchase and create user later
      // For MVP, create user now but inactive until payment? Or just purchase record with email
    }

    // Payment
    const payment = await createPayment(email, VIDEO_PRICE, 'Dance Tutorial', 'Valued Dancer');
    
    // Store purchase intent (pending)
    // If user doesn't exist, we can create purchase with just email reference or temporary user
    // Let's create a purchase record with email embedded for now if user doesn't exist
    // But Mongoose schema requires User ID. So let's create a User placeholder.
    
    if (!user) {
      // Create user placeholder (inactive)
      const tempPass = await hashPassword(generateTempPassword());
      user = await User.create({
        email,
        username: email.split('@')[0] + Math.floor(Math.random() * 1000),
        passwordHash: tempPass,
      });
    }

    await Purchase.create({
      userId: user._id,
      videoId: VIDEO_ID, // Use mock ID or actual ID
      paymentId: payment.paymentId,
      status: 'pending',
    });

    res.json({ 
      checkoutUrl: payment.checkoutUrl,
      paymentId: payment.paymentId // Return for dev/testing
    });
  } catch (error) {
    console.error('Purchase error:', error);
    res.status(500).json({ message: 'Failed to initiate purchase' });
  }
});

// Webhook for GreenInvoice success
router.post('/webhook', async (req, res) => {
  // Verify signature if possible
  const { paymentId, status } = req.body; // Adapt to actual webhook payload

  if (status === 'success' || status === 'completed') {
    const purchase = await Purchase.findOne({ paymentId });
    if (purchase && purchase.status !== 'completed') {
      purchase.status = 'completed';
      await purchase.save();

      // Grant access
      const user = await User.findById(purchase.userId);
      if (user) {
        // Generate actual credentials if needed or send reset link
        const tempPassword = generateTempPassword();
        const hashedPassword = await hashPassword(tempPassword);
        
        user.passwordHash = hashedPassword;
        await user.save();

        // Send email
        const loginLink = `${process.env.APP_BASE_URL}/login`;
        await sendAccessEmail(user.email, user.username, loginLink, tempPassword);
        
        console.log(`✅ Access granted to ${user.email}`);
      }
    }
  }

  res.sendStatus(200);
});

export default router;
