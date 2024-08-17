// backend/server.js or app.js
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config'); // Import your config

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Middleware and routes
app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
