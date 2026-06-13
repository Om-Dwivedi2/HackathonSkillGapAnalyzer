const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  // Connect to database
  await connectDB();

  // Start Express server
  app.listen(PORT, () => {
    console.log(`CareerLens server running on port ${PORT}`);
  });
};

startServer();
