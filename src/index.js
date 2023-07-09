import { app } from "./app";

import { config } from "./config/config";
import { logger } from "./config/logger";
import { mongooseConnection } from "./config/mongodb";
import { sequelize } from "./config/sqlite";

let server;
mongooseConnection.once('open', () => {
  logger.info('Connected to MongoDB.');
  server = app.listen(config.port, () => {
    logger.info(`Listening on port ${config.port}.`);
  });
});


// Exit Handler
const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

// Unexpected Error Handler
const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});