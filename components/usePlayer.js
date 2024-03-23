import { useState, useEffect, useMemo, useCallback } from 'react';
import { fetchTracks, playTracks } from '../api';

export default function usePlayer() {
  const [tracks, setTracks] = useState([]);
  const [status, setStatus] = useState('idle'); // fetching, idle, playing, paused

  const currentTrack = useMemo(() => tracks[0] || [], [tracks]);

  const getTracks = async () => {
    try {
      setStatus('fetching');
      const response = await fetchTracks();
      setTracks(response.tracks);
      setStatus('idle');
    } catch (error) {
      console.error(error);
    }
  }

  const refreshTracks = async () => {
    try {
      const response = await fetchTracks();
      setTracks((prevTracks) => [...prevTracks, ...response.tracks]);
    } catch (error) {
      console.error(error);
    }
  }

  const play = useCallback(async () => {
    try {
      await playTracks.play(currentTrack);
      setStatus('playing');
    } catch (error) {
      console.error(error);
    }
  }, [currentTrack]);

  const pause = useCallback(async () => {
    try {
      await playTracks.pause(currentTrack);
      setStatus('paused');
    } catch (error) {
      console.error(error);
    }
  }, [currentTrack]);

  const skipTrack = useCallback(() => {
    setTracks((prevTracks) => prevTracks.slice(1));
  }, [setTracks]);

  useEffect(() => {
    getTracks();
  }, []);

  // When the currentTrack changes, play the new track
  useEffect(() => {
    if (currentTrack && status !== 'playing') {
      play(currentTrack);
    }
  }, [currentTrack]);

  // If there are no tracks, fetch a new list of tracks
  useEffect(() => {
    if(tracks.length === 3) {
      refreshTracks();
    }
  }, [tracks]);

  return { 
    currentTrack,
    status,
    play,
    pause,
    skipTrack
   };
}
