import healthcheck from '@/lib/routes/healthcheck';
import express from 'express';


const router = express.Router();

router.get('/healthcheck', healthcheck);

export default router;