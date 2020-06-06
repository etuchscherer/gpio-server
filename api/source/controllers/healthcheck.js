import { timestamp as ts } from '@/utils/timestamp';

export default (req, res) => {
  const timestamp = ts();
  res.json({ success: true, timestamp });
};