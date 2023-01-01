function Background({ type }) {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 w-full min-h-screen'>
      <div className='absolute w-full z-under top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-r from-[rgba(0,0,0,1)] md:w-9/12' />
      <img
        className='absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full max-h-screen z-under-10'
        src={
          type === 'cthulhu'
            ? '/cthulhu-bg.jpg'
            : type === 'cyberpunk'
            ? '/cyberpunk-bg.jpg'
            : '/ghanor-bg.jpg'
        }
        alt='Background'
      />
    </div>
  );
}

export default Background;
