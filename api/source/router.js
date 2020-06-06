import express from 'express';
import healthcheck from '@/controllers/healthcheck';
import { read, set, destroy } from '@/controllers/pins';
import { toggle as togglePump } from '@/controllers/pumps';
import { toggle as toggleLight } from '@/controllers/lights';

const router = express.Router();

// non-functional routes
router.get('/healthcheck', healthcheck);

// functional routes
router.get('/pins/:id', read);
router.post('/pins/:id/:state', set);
router.delete('/pins/:id', destroy);

router.post('/toggle/pump', togglePump);
router.post('/toggle/light', toggleLight);

export default router;