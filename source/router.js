import express from 'express';
import healthcheck from '@/lib/routes/healthcheck';
import testController from '@/lib/controllers/test-controller';

const router = express.Router();

router.get('/healthcheck', healthcheck);

router.post('/test-led/:pin', testController.ledOn);
router.get('/test-led/:pin', testController.ledOff);

export default router;