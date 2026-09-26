import { Router } from 'express';
import { getHealth } from '../controllers/health.controller';

const router = Router();

// Health Check Endpoint
router.get('/health', getHealth);

export default router;
