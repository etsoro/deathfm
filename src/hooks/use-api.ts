import { apiClient } from '../api';
import { Track } from '../models/track.model';
import { TrackResponse } from '../models/track-response.interface';

function useApi() {
  async function getCurrentlyPlaying(): Promise<Track> {
    const response = await apiClient.get<TrackResponse>('?action=GetCurrentlyPlaying');
    console.log('updateCurrentlyPlaying');
    return new Track(response.data);
  }

  async function getHistory(): Promise<Track[]> {
    const response = await apiClient.get<TrackResponse[]>('?action=GetHistory');
    return response.data.map((trackResponse) => new Track(trackResponse));
  }

  async function getQueue(): Promise<Track[]> {
    const response = await apiClient.get<TrackResponse[]>('?action=GetQueue');
    return response.data.map((trackResponse) => new Track(trackResponse));
  }

  return { getCurrentlyPlaying, getHistory, getQueue };
}

export default useApi;
