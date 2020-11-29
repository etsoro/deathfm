import { TrackResponse } from './track-response.interface';

export class Track {
  public track: string;
  public album: string;
  public artist?: string;
  public cover: string;
  public duration: number;
  public listeners?: number;
  public startDate?: Date;
  public currentDate?: Date;

  public progressTotal?: number;
  public progressElapsed?: number;
  public progressLeft?: number;

  constructor(trackResponse: TrackResponse) {
    this.track = trackResponse.Track;
    this.album = trackResponse.Album;
    this.artist = trackResponse.Artist;
    this.cover = trackResponse.CoverLink;
    this.duration = parseInt(trackResponse.Length);
    this.listeners = trackResponse.ListenerCount ? parseInt(trackResponse.ListenerCount) : undefined;
    this.startDate = trackResponse.PlayStart ? new Date(trackResponse.PlayStart) : undefined;
    this.currentDate = trackResponse.SystemTime ? new Date(trackResponse.SystemTime) : undefined;

    if (this.startDate && this.currentDate) this.initializeProgress();
  }

  private initializeProgress(): void {
    this.progressTotal = Math.trunc(this.duration / 1000);
    if (this.startDate && this.currentDate)
      this.progressElapsed = (this.currentDate.getTime() - this.startDate.getTime()) / 1000;
    else this.progressElapsed = 0;
    this.progressLeft = this.progressTotal - this.progressElapsed;
  }

  public getDuration(unit: 'ms' | 'sec' | 'min' = 'sec'): number {
    switch (unit) {
      case 'ms':
        return this.duration;
      case 'sec':
        return this.duration / 1000;
      case 'min':
        return this.duration / 1000 / 60;
    }
  }
}
