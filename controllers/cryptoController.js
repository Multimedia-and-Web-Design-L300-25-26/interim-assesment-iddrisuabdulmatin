import Crypto from '../models/Crypto.js';

export const getAllCrypto = async (req, res) => {
  try {
    const cryptos = await Crypto.find().sort({ createdAt: -1 });
    res.status(200).json({ cryptos });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getGainers = async (req, res) => {
  try {
    const gainers = await Crypto.find({ change24h: { $gt: 0 } })
      .sort({ change24h: -1 });
    res.status(200).json({ cryptos: gainers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getNewListings = async (req, res) => {
  try {
    const newListings = await Crypto.find().sort({ createdAt: -1 }).limit(10);
    res.status(200).json({ cryptos: newListings });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addCrypto = async (req, res) => {
  try {
    const { name, symbol, price, image, change24h } = req.body;

    if (!name || !symbol || !price) {
      return res.status(400).json({ message: 'Name, symbol and price are required.' });
    }

    const crypto = await Crypto.create({ name, symbol, price, image, change24h });
    res.status(201).json({
      message: 'Cryptocurrency added successfully!',
      crypto,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};