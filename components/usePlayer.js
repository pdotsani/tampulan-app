import { useState, useEffect, useMemo } from 'react';
import { fetchTracks } from '../api';

export default function usePlayer() {
  const [tracks, setTracks] = useState([]);

  const getTracks = async () => {
    try {
      const response = await fetchTracks();
      setTracks(response.tracks);
    } catch (error) {
      console.error(error);
    }
  }

  const trackToPlay = useMemo(() => {
    return tracks[0] || [];
  }, [tracks]);

  useEffect(() => {
    getTracks();
  }, []);

  return { 
    trackToPlay,
   };
}