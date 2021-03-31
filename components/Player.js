import { useEffect, useState } from 'react';

import PlatformsButtons from './PlataformsButtons';
import PlayerButtons from './PlayerButtons';

let currentTimeTimeOut;

function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [nerdcast, setNerdcast] = useState(null);
  const [currentTimeFormatted, setCurrentTimeFormatted] = useState('00:00:00');
  const [currentTime, setCurrentTime] = useState(0);
  const [durationFormatted, setDurationFormatted] = useState('00:00:00');
  const [duration, setDuration] = useState(0);

  function PlayPause() {
    setIsPlaying(!isPlaying);
    isPlaying ? nerdcast.pause() : nerdcast.play();
  }

  useEffect(() => {
    const audio = new Audio('/audio/cthulhu1.mp3');
    audio.preload = 'metadata';
    audio.onloadedmetadata = function () {
      const timeFormatted = new Date(1000 * Math.ceil(audio.duration))
        .toISOString()
        .substr(11, 8);
      setDurationFormatted(timeFormatted);
      setDuration(Math.ceil(audio.duration));
    };
    setNerdcast(audio);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      currentTimeTimeOut = setTimeout(() => {
        const timeFormatted = new Date(1000 * Math.ceil(nerdcast.currentTime))
          .toISOString()
          .substr(11, 8);
        setCurrentTimeFormatted(timeFormatted);
        setCurrentTime(nerdcast.currentTime);
      }, 1000);
    }
  }, [isPlaying, currentTime, currentTimeFormatted]);

  return (
    <div className='bg-theme-black bg-opacity-70 p-12 rounded-2xl blur'>
      <PlayerButtons isPlaying={isPlaying} onClickPlay={PlayPause} />
      <input
        className='mt-8 w-full rounded-lg overflow-hidden appearance-none bg-theme-gray h-3 w-128'
        type='range'
        max={duration}
        min={0}
        value={currentTime}
        onChange={() => {}}
      ></input>
      <div className='w-full flex justify-between'>
        <span className='font-quattro text-sm text-theme-white'>
          {currentTimeFormatted}
        </span>
        <span className='font-quattro text-sm text-theme-white'>
          {durationFormatted}
        </span>
      </div>
      <PlatformsButtons spotify='#' deezer='#' apple='#' />
    </div>
  );
}

export default Player;
