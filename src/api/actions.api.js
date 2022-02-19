import { fetch } from './fetch';
import { Track } from '../models/track';

const getCurrentlyPlaying = async () => {
  const response = await fetch('?action=GetCurrentlyPlaying');
  return new Track(response.data);
};

const getHistory = async () => {
  const response = await fetch('?action=GetHistory');
  return response.data.map((trackResponse) => new Track(trackResponse));
};

const getQueue = async () => {
  const response = await fetch('?action=GetQueue');
  return response.data.map((trackResponse) => new Track(trackResponse));
};

export { getCurrentlyPlaying, getHistory, getQueue };
