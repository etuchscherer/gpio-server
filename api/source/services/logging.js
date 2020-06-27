import { createLogger, format, transports } from 'winston';

const { combine, colorize } = format;

const logger = createLogger({
  level: 'debug',
  format: format.json(),
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

const info = function(message, label) {
  const level = 'info';
  if (!label) label = 'info';

  return logger.log({ level, message, label});
};

export default logger;

export { debug, info };