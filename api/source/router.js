import express from 'express';
import healthcheck from '@/controllers/healthcheck';
import { read, set, destroy, status } from '@/controllers/pins';
import { toggle as togglePump } from '@/controllers/pumps';
import { toggle as toggleLight } from '@/controllers/lights';
import Relay from '@/objects/relay';

const router = express.Router();

// non-functional routes
router.get('/healthcheck', healthcheck);

// experimental routes
router.get('/test', function(req, res) {
  const relay = new Relay('main lighting', 17);
  req.app.gpioService.set(17, relay);
  res.send('done');
});

router.post('/test', function(req, res) {
  const isEnergized = req.app.gpioService.get(17).toggle().isEnergized();
  res.json({ isEnergized });
});

// functional routes
router.get('/pins', status);
router.get('/pins/:id', read);
router.post('/pins/:id/:state', set);
router.delete('/pins/:id', destroy);

router.post('/toggle/pump', togglePump);
router.post('/toggle/light', toggleLight);

export default router;