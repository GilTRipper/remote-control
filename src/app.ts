import { createHttpServer } from "./http";
import { config } from "dotenv";
import { createWSServer } from "./websocket";

config();

export const startServer = () => {
  const httpServer = createHttpServer();
  const wss = createWSServer(Number(process.env.WS_PORT));

  httpServer.listen(process.env.HTTP_PORT, () => {
    console.log(`Start static http server on the ${process.env.HTTP_PORT} port..`);
  });

  wss.on("connection", stream => {});
  console.log(`WebSocket server started on the ${process.env.WS_PORT} port...`);
};
