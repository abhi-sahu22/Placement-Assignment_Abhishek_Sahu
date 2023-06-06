import express from 'express';
import { protect } from '../middlewares/auth.js';
import {
  getUserProfile,
  updateUserProfile,
  getUserOrderHistory,
} from '../controllers/userController.js';

const router = express.Router();

router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.route('/orders').get(protect, getUserOrderHistory);

export default router;
