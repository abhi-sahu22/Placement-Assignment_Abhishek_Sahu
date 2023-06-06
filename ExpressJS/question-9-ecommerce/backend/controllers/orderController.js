import User from '../models/User.js';

const createOrder = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate('cart.items.product');

    const products = user.cart.items.map((item) => ({
      product: item.product._id,
      quantity: item.quantity,
    }));

    const order = {
      products,
      totalAmount: user.cart.totalAmount,
    };

    // Save the order to the user's order history
    user.orders.push(order);
    user.cart.items = [];
    user.cart.totalAmount = 0;
    await user.save();

    res.status(201).json({ message: 'Order created', order });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getOrderById = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate('orders.product');

    const order = user.orders.find((order) => order._id.toString() === req.params.id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json({ order });
  } catch (error) {
    console.error('Error getting order by ID:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getUserOrders = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate('orders.product');

    res.status(200).json({ orders: user.orders });
  } catch (error) {
    console.error('Error getting user orders:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export { createOrder, getOrderById, getUserOrders };








































// import User from '../models/User.js';

// const createOrder = async (req, res) => {
//   try {
//     const { cartItems, totalAmount } = req.body;

//     const user = req.user;

//     const order = {
//       user: user._id,
//       cartItems,
//       totalAmount,
//       // Add any additional fields as needed
//     };

//     user.orders.push(order);

//     user.cart = [];

//     await user.save();

//     res.status(201).json(user.orders);
//   } catch (error) {
//     console.error('Error creating order:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// const getOrderById = async (req, res) => {
//   try {
//     const user = req.user;

//     const order = user.orders.find((order) => order._id === req.params.id);

//     if (!order) {
//       return res.status(404).json({ message: 'Order not found' });
//     }

//     res.json(order);
//   } catch (error) {
//     console.error('Error getting order by ID:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// const getUserOrders = async (req, res) => {
//   try {
//     const user = req.user;

//     res.json(user.orders);
//   } catch (error) {
//     console.error('Error getting user orders:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// export { createOrder, getOrderById, getUserOrders };
