import { WebSocketServer } from "ws";

export const createWSServer = (port: number | undefined) => {
  const wss = new WebSocketServer({ port });

  return wss;
};
