import logger from '@/services/logging';

export default function(req, res, next) {
  req.logger = logger;
  return next();
}