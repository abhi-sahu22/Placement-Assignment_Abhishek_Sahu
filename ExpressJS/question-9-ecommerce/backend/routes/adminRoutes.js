import express from 'express';
import {
  getAllOrders,
  updateOrderStatus,
  getAllUsers,
  deleteUser,
} from '../controllers/adminController.js';
import {protect} from '../middlewares/auth.js';

const router = express.Router();

router.get('/orders', protect, getAllOrders);
router.put('/orders/:id/status', protect, updateOrderStatus);
router.get('/users', protect, getAllUsers);
router.delete('/users/:id', protect, deleteUser);

export default router;
