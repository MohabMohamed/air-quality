const healthRouter = require('./health');

module.exports = (app) => {
  app.use('/health', healthRouter);
};
