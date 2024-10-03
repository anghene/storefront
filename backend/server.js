const express = require('express');
const https = require('https');
const fs = require('fs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./routes/products');

require('dotenv').config();  // Load environment variables from .env

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/products', productRoutes);

// MongoDB connection
const db = process.env.MONGODB_URI || 'mongodb://localhost:27017/productdb';
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.log(err));

// Read SSL file paths from .env
const sslOptions = {
  key: fs.readFileSync(process.env.SSL_KEY_PATH),  // Read key path from .env
  cert: fs.readFileSync(process.env.SSL_CERT_PATH) // Read cert path from .env
};

// HTTPS Server Configuration
const PORT = 5656; // Preferred port for HTTPS
https.createServer(sslOptions, app).listen(PORT, () => {
  console.log(`Secure server running on https://localhost:${PORT}`);
});