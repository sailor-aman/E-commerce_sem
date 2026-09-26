import dotenv from 'dotenv';
import app from './app';
import { checkDbConnection } from './db';

// Load environment variables
dotenv.config({ path: '../.env' });

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    // Check database connection before starting
    await checkDbConnection();
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
