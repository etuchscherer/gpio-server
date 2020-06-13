import express from 'express';
import healthcheck from '@/controllers/healthcheck';
import { read, set, destroy, status } from '@/controllers/pins';
import { toggle as togglePump } from '@/controllers/pumps';
import { toggle as toggleLight } from '@/controllers/lights';
import { read as readTemps } from '@/controllers/temps';
import { sync } from '@/controllers/sync';
import { toggle as toggleFan } from '@/controllers/fan';

const router = express.Router();

// non-functional routes
router.get('/healthcheck', healthcheck);

// experimental routes

// app routes
router.get('/sync', sync);

router.get('/pins', status);
router.get('/pins/:id', read);
router.post('/pins/:id/:state', set);
router.delete('/pins/:id', destroy);

router.post('/toggle/pump', togglePump);
router.post('/toggle/light', toggleLight);
router.post('/toggle/fan', toggleFan);

router.get('/temps', readTemps);

export default router;