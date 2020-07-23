export interface ICoordinates {
  x: number;
  y: number;
  z: number;
}

export interface ILngLat {
  longitude: number;
  latitide: number;
}

export interface IViewport {
  bearing: number;
  height: string;
  isDragging: boolean;
  latitude: number;
  longitude: number;
  width: string;
  zoom: number;
  pitch?: number;
  startBearing?: number;
  startDragLngLat?: number[];
  startPitch?: number;
}
