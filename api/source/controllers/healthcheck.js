import { timestamp as ts } from '@/utils/timestamp';

export default (req, res) => {
  const message = 'this is a message';
  const level = 'info';
  req.logger.log({ level, message });
  const timestamp = ts();
  res.json({ success: true, timestamp });
};