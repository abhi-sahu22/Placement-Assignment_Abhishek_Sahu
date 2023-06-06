import Order from '../models/Order.js';
import User from '../models/User.js';

// Get user profile
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      res.status(200).json({
        _id: user._id,
        email: user.email,
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update user profile
const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      user.email = req.body.email || user.email;
      const updatedUser = await user.save();

      res.status(200).json({
        _id: updatedUser._id,
        email: updatedUser.email,
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Error updating user profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get user order history
const getUserOrderHistory = async (req, res) => {
  try{
    const orders = await Order.find({ user: req.user._id });

    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching user order history:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export { getUserProfile, updateUserProfile, getUserOrderHistory };
