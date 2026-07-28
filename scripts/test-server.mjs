import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import worker from "../worker/index.js";

const port = Number(process.env.PORT || 4173);
const host = "127.0.0.1";

export function startServer() {
  const server = createServer(async (request, response) => {
    try {
      const url = new URL(request.url || "/", `http://${request.headers.host}`);
      const workerResponse = await worker.fetch(
        new Request(url, {
          method: request.method,
          headers: request.headers,
        }),
      );

      response.writeHead(
        workerResponse.status,
        Object.fromEntries(workerResponse.headers),
      );
      response.end(Buffer.from(await workerResponse.arrayBuffer()));
    } catch (error) {
      console.error(error);
      response.writeHead(500, { "content-type": "text/plain" });
      response.end("Internal server error");
    }
  });

  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(port, host, () => {
      console.log(`Dear Jobs test server listening at http://${host}:${port}`);
      resolve(server);
    });
  });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const server = await startServer();
  const stop = () => server.close(() => process.exit(0));
  process.on("SIGINT", stop);
  process.on("SIGTERM", stop);
}
