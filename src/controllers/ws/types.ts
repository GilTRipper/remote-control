export type CommandParamsType = string[];

export type CommandType =
  | "mouse_left"
  | "mouse_down"
  | "mouse_up"
  | "mouse_right"
  | "prnt_scrn"
  | "draw_circle"
  | "draw_square"
  | "draw_rectangle"
  | "mouse_position";


export type Commands = {
  [key in CommandType]: (params: CommandParamsType) => void;
};
