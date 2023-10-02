export interface BuildingProps {
  initial?: BuildingInitialProps;
  animate?: BuildingAnimateProps;
  rotation?: BuildingRotationProps;
  position?: BuildingPositionProps;
}

export interface BuildingInitialProps {
  scale: number;
  opacity: number;
}

export interface BuildingAnimateProps {
  scale: number;
  opacity: number;
  transition: BuildingTransitionProps;
}

interface BuildingTransitionProps {
  duration: number;
  type: string;
  stiffness: number;
}

export type BuildingRotationProps = [x: number, y: number, z: number];

export type BuildingPositionProps = [x: number, y: number, z: number];
