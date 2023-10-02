import {
  LandAnimateProps,
  LandInitialProps,
  LandPositionProps,
  LandProps,
  LandRotationProps,
} from "./Land.model";
import { v4 as uuidv4 } from "uuid";

const defaultInitial = {
  scale: 0,
  opacity: 0,
};

const defaultAnimate = {
  scale: 1,
  opacity: 1,
  transition: {
    duration: 1,
    type: "spring",
    stiffness: 75,
  },
};

const defaultRotation = [-Math.PI / 2, 0, 0] as [
  x: number,
  y: number,
  z: number
];

const defaultPosition = [0, 0, 0] as [x: number, y: number, z: number];

export default class LandController {
  initial: LandInitialProps;
  animate: LandAnimateProps;
  rotation: LandRotationProps;
  position: LandPositionProps;

  id: string;

  constructor({ initial, animate, rotation, position }: LandProps) {
    this.initial = initial ?? defaultInitial;

    this.animate = animate ?? defaultAnimate;

    this.rotation = rotation ?? defaultRotation;

    this.position = position ?? defaultPosition;

    this.id = uuidv4();
  }
}
