import PlatformsButtons from './PlataformsButtons';
import PlayerButtons from './PlayerButtons';

function Player() {
  return (
    <div className='bg-theme-black bg-opacity-70 p-12 rounded-2xl blur'>
      <PlayerButtons />
      <input
        className='mt-8 w-full rounded-lg overflow-hidden appearance-none bg-theme-gray h-3 w-128'
        type='range'
      ></input>
      <div className='w-full flex justify-between'>
        <span className='font-quattro text-sm text-theme-white'>0:00</span>
        <span className='font-quattro text-sm text-theme-white'>2:41:00</span>
      </div>
      <PlatformsButtons spotify="#" deezer="#" apple="#"/>
    </div>
  );
}

export default Player;
