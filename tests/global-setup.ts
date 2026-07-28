import type { FullConfig } from "@playwright/test";
import { startServer } from "../scripts/test-server.mjs";

export default async function globalSetup(_config: FullConfig) {
  const server = await startServer();

  return async () => {
    await new Promise<void>((resolve, reject) => {
      server.close((error?: Error) => {
        if (error) reject(error);
        else resolve();
      });
    });
  };
}
