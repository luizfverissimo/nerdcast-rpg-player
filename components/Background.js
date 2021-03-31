function Background({ type }) {
  return (
    <div className='fixed w-full min-h-screen top-0 left-0 bottom-0 right-0'>
      <div className='absolute w-9/12 z-under top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-r from-theme-black' />
      <img
        className='absolute w-full h-full z-under-10 max-h-screen top-0 left-0 bottom-0 right-0 object-cover'
        src={
          type === 'cthulhu'
            ? '/cthulhu-bg.jpg'
            : type === 'cyberpunk'
            ? '/cyberpunk-bg.jpg'
            : '/especial-bg.jpg'
        }
        alt='Background'
      />
    </div>
  );
}

export default Background;
