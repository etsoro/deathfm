import { useEffect, useState } from 'react';
import useApi from './use-api';
import { Track } from '../models/track.model';

function usePlayer() {
  const [loading, setLoading] = useState<boolean>(false);
  const [track, setTrack] = useState<Track | null>(null);
  const [history, setHistory] = useState<Track[]>([]);
  const [queue, setQueue] = useState<Track[]>([]);
  const { getCurrentlyPlaying, getHistory, getQueue } = useApi();

  useEffect(() => {
    updateTrack();
    updateHistory();
    updateQueue();
  }, []);

  async function updateTrack(): Promise<void> {
    setLoading(true);
    const newTrack = await getCurrentlyPlaying();
    setTrack(newTrack);
    setLoading(false);
  }

  async function updateHistory(): Promise<void> {
    setLoading(true);
    const newHistory = await getHistory();
    setHistory(newHistory);
    setLoading(false);
  }

  async function updateQueue(): Promise<void> {
    setLoading(true);
    const newQueue = await getQueue();
    setQueue(newQueue);
    setLoading(false);
  }

  return { loading, track, history, queue, updateTrack, updateHistory, updateQueue };
}

export default usePlayer;
