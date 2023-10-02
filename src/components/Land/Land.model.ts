export interface LandProps {
  initial?: LandInitialProps;
  animate?: LandAnimateProps;
  rotation?: LandRotationProps;
  position?: LandPositionProps;
}

export interface LandInitialProps {
  scale: number;
  opacity: number;
}

export interface LandAnimateProps {
  scale: number;
  opacity: number;
  transition: LandTransitionProps;
}

interface LandTransitionProps {
  duration: number;
  type: string;
  stiffness: number;
}

export type LandRotationProps = [x: number, y: number, z: number];

export type LandPositionProps = [x: number, y: number, z: number];
