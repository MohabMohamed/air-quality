const pino = require('pino');
const { NODE_ENV_ENUM } = require('./node-env');
const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  transport:
    process.env.NODE_ENV !== NODE_ENV_ENUM.prod
      ? {
          target: 'pino-pretty',
          options: {
            colorize: true
          }
        }
      : undefined
});

module.exports = logger;
