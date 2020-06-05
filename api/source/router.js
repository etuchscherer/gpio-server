import express from 'express';
import healthcheck from '@/routes/healthcheck';
import { read, set, destroy } from '@/controllers/led-controller';

const router = express.Router();

router.get('/healthcheck', healthcheck);

router.get('/led/:pin', read);
router.post('/led/:pin/:state', set);
router.delete('/led/:pin', destroy);

export default router;