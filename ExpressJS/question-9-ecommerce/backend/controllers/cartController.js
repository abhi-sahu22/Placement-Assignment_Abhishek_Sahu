import User from '../models/User.js';

const getCartItems = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate('cart.items.product');

    res.json(user.cart.items);
  } catch (error) {
    console.error('Error getting cart items:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const user = await User.findById(req.user._id);

    user.cart.items.push({ product: productId, quantity });
    await user.save();

    res.status(201).json({ message: 'Product added to cart' });
  } catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updateCartItem = async (req, res) => {
  try {
    const { quantity } = req.body;

    const user = await User.findById(req.user._id);

    const cartItem = user.cart.items.find((item) => item._id.toString() === req.params.id);

    if (!cartItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }

    cartItem.quantity = quantity;
    await user.save();

    res.status(200).json({ message: 'Cart item updated' });
  } catch (error) {
    console.error('Error updating cart item:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const removeCartItem = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    user.cart.items = user.cart.items.filter((item) => item._id.toString() !== req.params.id);
    await user.save();

    res.status(200).json({ message: 'Cart item removed' });
  } catch (error) {
    console.error('Error removing cart item:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export { getCartItems, addToCart, updateCartItem, removeCartItem };






































// import User from '../models/User.js';

// const getCartItems = async (req, res) => {
//   try {
//     const user = req.user;

//     res.json(user.cart);
//   } catch (error) {
//     console.error('Error getting cart items:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// const addToCart = async (req, res) => {
//   try {
//     const { productId, quantity } = req.body;

//     const user = req.user;

//     const product = await Product.findById(productId);

//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }

//     const cartItem = {
//       product: product._id,
//       name: product.name,
//       price: product.price,
//       image: product.image,
//       quantity,
//     };

//     user.cart.push(cartItem);

//     await user.save();

//     res.status(201).json(user.cart);
//   } catch (error) {
//     console.error('Error adding to cart:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// const updateCartItem = async (req, res) => {
//   try {
//     const { quantity } = req.body;

//     const user = req.user;

//     const cartItem = user.cart.find((item) => item._id === req.params.id);

//     if (!cartItem) {
//       return res.status(404).json({ message: 'Cart item not found' });
//     }

//     cartItem.quantity = quantity;

//     await user.save();

//     res.status(200).json(user.cart);
//   } catch (error) {
//     console.error('Error updating cart item:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// const removeCartItem = async (req, res) => {
//   try {
//     const user = req.user;

//     user.cart = user.cart.filter((item) => item._id !== req.params.id);

//     await user.save();

//     res.status(200).json(user.cart);
//   } catch (error) {
//     console.error('Error removing cart item:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// export { getCartItems, addToCart, updateCartItem, removeCartItem };
