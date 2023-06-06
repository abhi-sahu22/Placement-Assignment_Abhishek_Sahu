import Product from '../models/Product.js';

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.json(products);
  } catch (error) {
    console.error('Error getting products:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    console.error('Error getting product by ID:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, description, price, image, count } = req.body;

    const product = await Product.create({
      name,
      description,
      price,
      image,
      count,
    });

    res.status(201).json(product);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { name, description, price, image, count } = req.body;

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, description, price, image, count },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export { getProducts, getProductById, createProduct, updateProduct, deleteProduct };
