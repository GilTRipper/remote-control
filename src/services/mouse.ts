import { down, left, mouse, right, up } from "@nut-tree/nut-js";

export const getPosition = async () => {
  const { x, y } = await mouse.getPosition();

  return `mouse_position ${x}px,${y}px`;
};

export const mouseDown = async (...args: string[]) => {
  const [offset] = args;

  await mouse.move(down(+offset));

  return `mouse_down=>${offset}px`;
};

export const mouseUp = async (...args: string[]) => {
  const [offset] = args;

  await mouse.move(up(+offset));

  return `mouse_up=>${offset}px`;
};

export const mouseLeft = async (...args: string[]) => {
  const [offset] = args;

  await mouse.move(left(+offset));

  return `mouse_left=>${offset}px`;
};

export const mouseRight = async (...args: string[]) => {
  const [offset] = args;

  await mouse.move(right(+offset));

  return `mouse_right=>${offset}px`;
};
