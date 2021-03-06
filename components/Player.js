import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import PlatformsButtons from './PlataformsButtons';
import PlayerButtons from './PlayerButtons';

let currentTimeTimeOut;

function Player({ audioPath, data }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTimeFormatted, setCurrentTimeFormatted] = useState('00:00:00');
  const [currentTime, setCurrentTime] = useState(0);
  const [durationFormatted, setDurationFormatted] = useState('');
  const [duration, setDuration] = useState(0);

  const nerdcast = useRef(null);

  useEffect(() => {
    nerdcast.current.preload = 'metadata';
    nerdcast.current.onloadedmetadata = function () {
      const timeFormatted = new Date(
        1000 * Math.ceil(nerdcast.current.duration)
      )
        .toISOString()
        .substr(11, 8);
      setDurationFormatted(timeFormatted);
      setDuration(Math.ceil(nerdcast.current.duration));
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      currentTimeTimeOut = setTimeout(() => {
        if (nerdcast.current) {
          if (durationFormatted === currentTimeFormatted) {
            nerdcastEnded();
            return;
          }

          const timeFormatted = new Date(
            1000 * Math.ceil(nerdcast.current.currentTime)
          )
            .toISOString()
            .substr(11, 8);
          setCurrentTimeFormatted(timeFormatted);
          setCurrentTime(nerdcast.current.currentTime);
        }
      }, 1000);
    }
  }, [isPlaying, currentTime, currentTimeFormatted]);

  function nerdcastEnded() {
    setIsPlaying(false);
    nerdcast.current.pause();
    nerdcast.current.currentTime = 0;
    setCurrentTime(nerdcast.current.currentTime);
    setCurrentTimeFormatted('00:00:00');
  }

  function playPause() {
    setIsPlaying(!isPlaying);
    isPlaying ? nerdcast.current.pause() : nerdcast.current.play();
  }

  function setPlayingState(state) {
    setIsPlaying(state);
  }

  function selectTime(value) {
    nerdcast.current.currentTime = value;
  }

  function nextTenSeconds() {
    nerdcast.current.currentTime += 10;
    setCurrentTime(nerdcast.current.currentTime);
  }

  function prevTenSeconds() {
    nerdcast.current.currentTime -= 10;
    setCurrentTime(nerdcast.current.currentTime);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, delay: 0.4 }
      }}
      className='bg-theme-black bg-opacity-70 p-12 rounded-2xl blur'
    >
      <PlayerButtons
        isPlaying={isPlaying}
        onClickPlay={playPause}
        onCLickNext10={nextTenSeconds}
        onClickReturn10={prevTenSeconds}
        type={data.type}
      />
      <audio
        ref={nerdcast}
        src={data.audio}
        onPlay={() => setPlayingState(true)}
        onPause={() => setIsPlaying(false)}
      />
      <input
        className='mt-8 w-full rounded-lg overflow-hidden appearance-none bg-theme-gray h-3 w-128'
        type='range'
        max={duration}
        min={0}
        value={currentTime}
        step={duration / 60}
        onChange={(e) => selectTime(e.target.value)}
      ></input>
      <div className='w-full flex justify-between'>
        <span className='font-quattro text-sm text-theme-white'>
          {currentTimeFormatted}
        </span>
        <span className='font-quattro text-sm text-theme-white'>
          {durationFormatted}
        </span>
      </div>
      <PlatformsButtons
        spotify={data.linkSpotify}
        deezer={data.linkDeezer}
        apple={data.linkApple}
        type={data.type}
      />
    </motion.div>
  );
}

export default Player;
