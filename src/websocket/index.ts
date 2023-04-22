import { WebSocketServer } from "ws";

export const createWSServer = (port: number) => {
  const wss = new WebSocketServer({ port });

  return wss;
};
