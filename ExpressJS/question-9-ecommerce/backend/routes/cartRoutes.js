import express from 'express';
import {protect} from '../middlewares/auth.js';
import {
  getCartItems,
  addToCart,
  updateCartItem,
  removeCartItem,
} from '../controllers/cartController.js';

const router = express.Router();

router.route('/cart').get(protect, getCartItems);
router.route('/cart/add').post(protect, addToCart);
router.route('/cart/:id').put(protect, updateCartItem).delete(protect, removeCartItem);

export default router;

































// import express from 'express';
// import {
//   getCartItems,
//   addToCart,
//   updateCartItem,
//   removeCartItem,
// } from '../controllers/cartController.js';
// import protect from '../middlewares/auth.js';

// const router = express.Router();

// router.get('/', protect, getCartItems);
// router.post('/', protect, addToCart);
// router.put('/:id', protect, updateCartItem);
// router.delete('/:id', protect, removeCartItem);

// export default router;
