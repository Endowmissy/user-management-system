import { Server } from "http";
import db from "../../database/db";
import logger from "../../config/logger";

export const handleGracefulShutdown = (server: Server) => {
  const shutdown = async (signal: string) => {
    logger.info(`Received ${signal}. Starting graceful shutdown...`);

    try {
      await new Promise<void>((resolve, reject) => {
        server.close((err) => (err ? reject(err) : resolve()));
      });
      logger.info("✅ Server stopped accepting new connections.");

      // Close database connections
      const connection = await db.client.acquireConnection();
      await db.client.releaseConnection(connection);
      logger.info("✅ Database connection closed.");

      // Exit process successfully
      logger.info("🚀 Shutdown completed.");
      process.exit(0);
    } catch (err) {
      logger.error("❌ Error during shutdown:", err);
      process.exit(1);
    }
  };

  // Handle termination signals
  ["SIGINT", "SIGTERM"].forEach((signal) => {
    process.on(signal, () => shutdown(signal));
  });
};
