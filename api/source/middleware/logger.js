export default function(req, res, next) {
  req.logger = req.app.logger;
  return next();
}