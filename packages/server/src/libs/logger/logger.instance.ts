import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  format: format.combine(
    format.errors({ stack: true }),
    format.timestamp(),
    format.prettyPrint(),
  ),
  transports: [
    new transports.File({
      filename: 'error-file',
      dirname: `${__dirname}/../../../logs`,
      level: 'error',
    }),
  ],
});

export { logger };
