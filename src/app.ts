import { config } from "dotenv";

import { createWSServer } from "./websocket";
import { createHttpServer } from "./http";
import { WS } from "./controllers";

config();

export const startServer = () => {
  const httpServer = createHttpServer();
  const wss = createWSServer(Number(process.env.WS_PORT));

  httpServer.listen(process.env.HTTP_PORT, () => {
    console.log(`Start static http server on the ${process.env.HTTP_PORT} port..`);
  });

  wss.on("connection", WS.wsController);

  console.log(`WebSocket server started on the ${process.env.WS_PORT} port...`);

  process.on("SIGINT", () => {
    httpServer.close();
    wss.close();
  });
};
