import { mouse, Button, left, right, down, up, straightTo } from "@nut-tree/nut-js";

import type { Point } from "@nut-tree/nut-js";

const getPoints = (radius: number, { centerX, centerY }: { centerX: number; centerY: number }) => {
  var angleStep = Math.PI / 180;

  var points = [];

  for (var angle = 0; angle < 2 * Math.PI; angle += angleStep) {
    var x = centerX + radius * Math.cos(angle);
    var y = centerY + radius * Math.sin(angle);
    points.push({ x: x, y: y });
  }

  return points;
};

export const drawCircle = async (...args: string[]) => {
  const [radius] = args;
  const { x: centerX, y: centerY } = await mouse.getPosition();

  const points: Point[] = getPoints(+radius, { centerX, centerY });

  await mouse.setPosition(points[0]);
  await mouse.pressButton(Button.LEFT);
  await mouse.move(points);
  await mouse.releaseButton(Button.LEFT);

  return `draw_circle=>${radius}px`;
};

export const drawSquare = async (...args: string[]) => {
  const [width] = args;

  await mouse.pressButton(Button.LEFT);

  await mouse.move(right(+width));
  await mouse.move(down(+width));
  await mouse.move(left(+width));
  await mouse.move(up(+width));

  await mouse.releaseButton(Button.LEFT);

  return `draw_square=>${width}px`;
};

export const drawRectangle = async (...args: string[]) => {
  const [width, length] = args;

  await mouse.pressButton(Button.LEFT);

  await mouse.move(right(+length));
  await mouse.move(down(+width));
  await mouse.move(left(+length));
  await mouse.move(up(+width));

  await mouse.releaseButton(Button.LEFT);

  return `draw_rectangle=>${width}px`;
};
