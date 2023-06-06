import User from '../models/User.js';

const getAllOrders = async (req, res) => {
  try {
    const orders = await User.find({}, 'orders').populate('user', 'email');

    res.json(orders);
  } catch (error) {
    console.error('Error getting all orders:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const order = await User.findOneAndUpdate(
      { 'orders._id': req.params.id },
      { 'orders.$.status': status },
      { new: true }
    );

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error('Error updating order status:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, '-password');

    res.json(users);
  } catch (error) {
    console.error('Error getting all users:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export { getAllOrders, updateOrderStatus, getAllUsers, deleteUser };
