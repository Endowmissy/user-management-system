import { Server } from "http";
import db from "../../database/db";
import logger from "../../config/logger";

export const handleGracefulShutdown = (server: Server) => {
  const shutdown = async (signal: string) => {
    logger.info(`Received ${signal}. Starting graceful shutdown...`);

    try {
      server.close(() => {
        logger.info("✅ Server stopped accepting new connections.");
      });

      // Close database connections
      await db.destroy();
      logger.info("✅ Database connection closed.");
 
      // Perform cleanup tasks
      await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulating cleanup
      logger.info("✅ Completed cleanup tasks.");

      // Exit process successfully
      logger.info("🚀 Shutdown complete. Exiting process.");
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
  
}
