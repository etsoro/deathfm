import { apiClient } from '../services/api';
import { Track } from '../models/track.model';
import { TrackResponse } from '../models/track-response.interface';

export default function useApi() {
  async function getCurrentlyPlaying(): Promise<Track> {
    const response = await apiClient.get<TrackResponse>('?action=GetCurrentlyPlaying');
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
