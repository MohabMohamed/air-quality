const app = require('./app');
const logger = require('./util/logger');

const PORT = process.env.PORT;

app.listen(PORT, () => logger.info(`Server is running on port ${PORT}`));
