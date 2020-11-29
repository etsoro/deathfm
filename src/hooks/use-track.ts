import { Track } from '../models/track.model';
import { useEffect, useState } from 'react';
import useApi from './use-api';

function useTrack() {
  const [track, setTrack] = useState<Track | null>(null);

  const { getCurrentlyPlaying } = useApi();

  useEffect(() => {
    updateTrack();
  }, []);

  async function updateTrack(): Promise<void> {
    const newTrack = await getCurrentlyPlaying();
    setTrack(() => newTrack);
  }

  return { track };
}

export default useTrack;
