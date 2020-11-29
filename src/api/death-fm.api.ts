import axios from 'axios';
import moment from 'moment';
import Media from '@/types/media.type';
import Track from '@/types/track.type';

export default {
  getCurrentlyPlaying: async (): Promise<Track> => {
    const response = await axios.get(
      `http://death.fm/soap/FM24sevenJSON.php?action=GetCurrentlyPlaying`
    );
    const media: Media = response.data as Media;
    return {
      title: media.Track,
      album: media.Album,
      artist: media.Artist,
      cover: media.CoverLink,
      thumbnail: media.ThumbnailLink,
      duration: parseInt(media.Length),
      listeners: media.ListenerCount
        ? parseInt(media.ListenerCount)
        : undefined,
      requestedBy: media.RequestedBy,
      startDate: moment(media.PlayStart).toDate(),
      currentDate: moment(media.SystemTime).toDate(),
      playing: true
    };
  },
  getHistory: async (): Promise<Track[]> => {
    const response = await axios.get(
      `http://death.fm/soap/FM24sevenJSON.php?action=GetHistory`
    );
    const mediaList: Media[] = response.data as Media[];
    return mediaList.map(media => {
      return {
        title: media.Track,
        album: media.Album,
        cover: media.CoverLink,
        thumbnail: media.ThumbnailLink,
        duration: parseInt(media.Length),
        requestedBy: media.RequestedBy
      };
    });
  },
  getQueue: async (): Promise<Track[]> => {
    const response = await axios.get(
      `http://death.fm/soap/FM24sevenJSON.php?action=GetQueue`
    );
    const mediaList: Media[] = response.data as Media[];
    return mediaList.map(media => {
      return {
        title: media.Track,
        album: media.Album,
        cover: media.CoverLink,
        thumbnail: media.ThumbnailLink,
        duration: parseInt(media.Length),
        requestedBy: media.RequestedBy
      };
    });
  }
};
