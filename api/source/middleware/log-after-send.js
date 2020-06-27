import { info } from '@/services/logging';

const label = 'after-controller';

export default function logAfterSend(req, res, next) {
  info(`${res.statusCode} sent from ${req.path}`, label);
  return next();
}
