import { createLogger, format, transports } from 'winston';

const { combine, timestamp, label, prettyPrint, colorize } = format;

const logger = createLogger({
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
  if (!label) label = 'debug';

  return logger.log({ level, message, label });
};

export default logger;

export { debug };