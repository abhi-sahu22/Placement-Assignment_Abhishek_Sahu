
import Product from "../models/productSchema.js";

const uploadProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send({ message: "Uploaded successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(JSON.stringify(products));
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

export { uploadProduct, getProducts };
