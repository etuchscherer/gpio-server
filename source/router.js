import express from 'express';
import healthcheck from '@/lib/routes/healthcheck';
import { read, set, destroy } from '@/lib/controllers/led-controller';

const router = express.Router();

router.get('/healthcheck', healthcheck);

router.get('/led/:pin', read);
router.post('/led/:pin/:state', set);
router.delete('/led/:pin', destroy);

export default router;