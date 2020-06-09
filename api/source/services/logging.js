import { createLogger, format, transports } from 'winston';

const { combine, timestamp, label, prettyPrint, colorize } = format;

const logger = createLogger({
  level: 'debug',
  format: combine(label({ label: 'Cache' }), timestamp(), prettyPrint()),
  transports: [
    new transports.Console({
      format: combine(colorize()),
    }),
  ],
});

/**
 *
 * @param {*} message
 * @param {*} label
 */
const debug = function(message, label) {
  const level = 'debug';
  if (!label) label = 'debug';

  return logger.log({ level, message, label });
};

export default logger;

export { debug };