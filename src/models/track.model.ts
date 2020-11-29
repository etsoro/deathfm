import { TrackResponse } from './track-response.interface';

export class Track {
  track: string;
  album: string;
  artist?: string;
  cover: string;
  duration: number;
  listeners?: number;
  dateStart?: Date;

  constructor(trackResponse: TrackResponse) {
    this.track = trackResponse.Track;
    this.album = trackResponse.Album;
    this.artist = trackResponse.Artist;
    this.cover = trackResponse.CoverLink;
    this.duration = parseInt(trackResponse.Length);
    this.listeners = trackResponse.ListenerCount ? parseInt(trackResponse.ListenerCount) : undefined;
    this.dateStart = trackResponse.PlayStart ? new Date(trackResponse.PlayStart) : undefined;
  }
}
