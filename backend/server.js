require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const Product = require('./models/Product');
const initialProducts = require('./data/initialProducts');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// Auto seed products if database is empty
const autoSeedIfEmpty = async () => {
  try {
    const count = await Product.countDocuments();
    if (count === 0) {
      console.log('[Seed] Database is empty. Seeding initial products...');
      await Product.insertMany(initialProducts);
      console.log(`[Seed] Seeded ${initialProducts.length} initial products successfully!`);
    } else {
      console.log(`[Database] Found ${count} existing products in database.`);
    }
  } catch (error) {
    console.error('[Seed] Error auto seeding database:', error.message);
  }
};

// Start Server after connecting to MongoDB
connectDB().then(async () => {
  await autoSeedIfEmpty();
  app.listen(PORT, () => {
    console.log(`[Server] Backend running at http://localhost:${PORT}`);
    console.log(`[API] Products API available at http://localhost:${PORT}/api/products`);
  });
});

