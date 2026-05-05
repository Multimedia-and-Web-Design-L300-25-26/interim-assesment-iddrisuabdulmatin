import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Crypto from './models/Crypto.js';

dotenv.config();

const cryptos = [
  { name: 'Bitcoin', symbol: 'BTC', price: 67234.18, change24h: 2.41, image: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' },
  { name: 'Ethereum', symbol: 'ETH', price: 3521.44, change24h: 1.87, image: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
  { name: 'Solana', symbol: 'SOL', price: 178.92, change24h: 3.62, image: 'https://cryptologos.cc/logos/solana-sol-logo.png' },
  { name: 'XRP', symbol: 'XRP', price: 0.9524, change24h: -1.23, image: 'https://cryptologos.cc/logos/xrp-xrp-logo.png' },
  { name: 'BNB', symbol: 'BNB', price: 412.33, change24h: 0.71, image: 'https://cryptologos.cc/logos/bnb-bnb-logo.png' },
  { name: 'Tether', symbol: 'USDT', price: 1.00, change24h: 0.01, image: 'https://cryptologos.cc/logos/tether-usdt-logo.png' },
  { name: 'USD Coin', symbol: 'USDC', price: 1.00, change24h: 0.00, image: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png' },
  { name: 'Avalanche', symbol: 'AVAX', price: 38.72, change24h: -2.14, image: 'https://cryptologos.cc/logos/avalanche-avax-logo.png' },
  { name: 'Cardano', symbol: 'ADA', price: 0.4521, change24h: 1.05, image: 'https://cryptologos.cc/logos/cardano-ada-logo.png' },
  { name: 'Polkadot', symbol: 'DOT', price: 7.84, change24h: -0.88, image: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png' },
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('✅ MongoDB connected');
    await Crypto.deleteMany({});
    await Crypto.insertMany(cryptos);
    console.log('✅ Crypto data seeded successfully!');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Error:', err.message);
    process.exit(1);
  });