import { app } from './config';
import logger from './config/logger';
import db from './database/db';
import { handleGracefulShutdown } from './utils/helpers/gracefulShutdown';

const port = process.env.PORT || 3100;

const server = app.listen(port, () => {
  logger.info(`🚀 Server running on port ${port}`);
    db.raw('SELECT 1')
    .then(() => {
      logger.info('🚀 Database Connection has been established successfully.');
    })
    .catch((error: any) => {
      logger.debug("Unable to connect to the database")
      logger.debug(error);
    });
});

// Handle graceful shutdown
handleGracefulShutdown(server);

export default app;
