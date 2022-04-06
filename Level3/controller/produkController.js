import Produk from "../models/productModel.js";

const getProduk = async (req, res) => {
  try {
    const produk = await Produk.find();
    res.json(produk);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default getProduk;
