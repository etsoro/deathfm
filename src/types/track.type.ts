export default interface Track {
  title: string;
  album: string;
  artist?: string;
  cover: string;
  thumbnail: string;
  duration: number;
  listeners?: number;
  requestedBy: string;
  startDate?: Date;
  currentDate?: Date;
  playing?: boolean;
}
