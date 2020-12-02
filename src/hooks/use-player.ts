import { useEffect, useState } from 'react';
import useApi from './use-api';
import { Track } from '../models/track.model';

export default function usePlayer() {
  const [loading, setLoading] = useState<boolean>(false);
  const [track, setTrack] = useState<Track | null>(null);
  const [history, setHistory] = useState<Track[]>([]);
  const [queue, setQueue] = useState<Track[]>([]);
  const { getCurrentlyPlaying, getHistory, getQueue } = useApi();

  useEffect(() => {
    updateTrack();
    updateHistory();
    updateQueue();
    return () => console.log(`usePlayer loaded`);
  }, []);

  async function updateTrack(): Promise<void> {
    setLoading(true);
    const newTrack = await getCurrentlyPlaying();
    setTrack(newTrack);
    console.log(JSON.stringify(newTrack, null, 2));
    console.log(`Progress total: ${newTrack.progressTotal}`);
    console.log(`Progress elapsed: ${newTrack.progressElapsed}`);
    console.log(`Progress left: ${newTrack.progressLeft}`);
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

  return { track, history, queue, updateTrack, updateHistory, updateQueue };
}
