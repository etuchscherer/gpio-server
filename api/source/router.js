import express from 'express';
import healthcheck from '@/controllers/healthcheck';
import { read, set, destroy } from '@/controllers/pins';

const router = express.Router();

// non-functional routes
router.get('/healthcheck', healthcheck);

// functional routes
router.get('/pins/:id', read);
router.post('/pins/:id/:state', set);
router.delete('/pins/:id', destroy);

export default router;