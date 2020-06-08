import express from 'express';
import healthcheck from '@/controllers/healthcheck';
import { read, set, destroy, status } from '@/controllers/pins';
import { toggle as togglePump } from '@/controllers/pumps';
import { toggle as toggleLight } from '@/controllers/lights';
import { read as readTemps } from '@/controllers/temps';

const router = express.Router();

// non-functional routes
router.get('/healthcheck', healthcheck);

// experimental routes

// functional routes
router.get('/pins', status);
router.get('/pins/:id', read);
router.post('/pins/:id/:state', set);
router.delete('/pins/:id', destroy);

router.post('/toggle/pump', togglePump);
router.post('/toggle/light', toggleLight);

router.get('/temps', readTemps);

export default router;