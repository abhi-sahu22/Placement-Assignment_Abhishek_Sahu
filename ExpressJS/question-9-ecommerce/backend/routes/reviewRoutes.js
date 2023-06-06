import express from 'express';
import { protect } from '../middlewares/auth.js';
import {
  createProductReview,
  getProductReviews,
} from '../controllers/reviewController.js';

const router = express.Router();

router.route('/products/:id/reviews').post(protect, createProductReview);
router.route('/products/:id/reviews').get(getProductReviews);

export default router;
