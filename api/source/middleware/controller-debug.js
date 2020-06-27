import { debug } from '@/services/logging';

const label = 'controller-debug';

export default function controllerDebug(req, res, next) {
  debug(`request made to ${req.path}`, label);
  return next();
}
