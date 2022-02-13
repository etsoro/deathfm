class Track {
  timePlayed;
  timeRemaining;
  timeElapsed;

  constructor(trackResponse) {
    this.track = trackResponse.Track;
    this.album = trackResponse.Album;
    this.artist = trackResponse.Artist;
    this.cover = trackResponse.CoverLink;
    this.duration = parseInt(trackResponse.Length);
    this.listeners = trackResponse.ListenerCount
      ? parseInt(trackResponse.ListenerCount)
      : undefined;
    this.startDate = trackResponse.PlayStart ? new Date(trackResponse.PlayStart) : undefined;
    this.currentDate = trackResponse.SystemTime ? new Date(trackResponse.SystemTime) : undefined;
    this.#initializeProgress();
  }

  #initializeProgress() {
    if (this.startDate && this.currentDate)
      this.timePlayed = this.currentDate.getTime() - this.startDate.getTime();
    this.timeRemaining = this.duration - (this.timePlayed || 0);
    this.timeElapsed = this.duration - this.timeRemaining;
  }
}
export { Track };
