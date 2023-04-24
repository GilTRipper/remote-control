import { WebSocket, createWebSocketStream } from "ws";


import { Figures, Mouse, Screen } from "../../services";

import type { Duplex } from "stream";
import type { CommandParamsType, CommandType, Commands } from "./types";

const commands: Commands = {
  mouse_left: (params: CommandParamsType) => Mouse.mouseLeft(...params),
  mouse_down: (params: CommandParamsType) => Mouse.mouseDown(...params),
  mouse_right: (params: CommandParamsType) => Mouse.mouseRight(...params),
  mouse_up: (params: CommandParamsType) => Mouse.mouseUp(...params),
  draw_circle: (params: CommandParamsType) => Figures.drawCircle(...params),
  draw_rectangle: (params: CommandParamsType) => Figures.drawRectangle(...params),
  draw_square: (params: CommandParamsType) => Figures.drawSquare(...params),
  prnt_scrn: (params: CommandParamsType) => Screen.printScreen(...params),
  mouse_position: () => Mouse.getPosition(),
};

export const wsController = (ws: WebSocket) => {
  const duplex = createWebSocketStream(ws, { encoding: "utf8", decodeStrings: false });

  duplex.on("data", async (data: string) => {
    const [command, ...args] = data.split(" ");

    try {
      const result = await commands[command as CommandType](args);
      console.log({ result });
      duplex.write(result);
    } catch (e) {
      console.error(e);
    }
  });
};
