import { Request, Response } from 'express';
import { checkDbConnection } from '../db';

export const getHealth = async (req: Request, res: Response) => {
  try {
    const dbStatus = await checkDbConnection();
    res.status(200).json({
      status: 'ok',
      db: dbStatus ? 'connected' : 'disconnected'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Health check failed',
      error: {
        code: 'HEALTH_CHECK_ERROR'
      }
    });
  }
};
