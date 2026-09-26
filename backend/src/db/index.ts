import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

export const checkDbConnection = async (): Promise<boolean> => {
  try {
    const client = await pool.connect();
    client.release();
    console.log('Successfully connected to PostgreSQL database');
    return true;
  } catch (error) {
    console.error('Error connecting to PostgreSQL database:', error);
    // In a real scenario we might want to throw the error to halt startup,
    // but for the MVP / foundation, returning false or throwing is fine.
    // We will throw to ensure startup fails if db is unreachable (if desired).
    return false;
  }
};

export default pool;
