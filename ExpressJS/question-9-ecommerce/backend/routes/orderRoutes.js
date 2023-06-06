import express from 'express';
import { protect } from '../middlewares/auth.js';
import {
  createOrder,
  getOrderById,
  getUserOrders,
} from '../controllers/orderController.js';

const router = express.Router();

router.route('/orders').post(protect, createOrder);
router.route('/orders/:id').get(protect, getOrderById);
router.route('/orders/user').get(protect, getUserOrders);

export default router;
































// import express from 'express';
// import {
//   createOrder,
//   getOrderById,
//   getUserOrders,
// } from '../controllers/orderController.js';
// import protect from '../middlewares/auth.js';

// const router = express.Router();

// router.post('/', protect, createOrder);
// router.get('/:id', protect, getOrderById);
// router.get('/user', protect, getUserOrders);

// export default router;
