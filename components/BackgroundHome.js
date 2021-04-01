function BackgroundHome() {
  return (
    <div className='fixed w-full min-h-screen top-0 left-0 bottom-0 right-0'>
      <img
        className='absolute w-full h-full z-under-10 max-h-screen top-0 left-0 bottom-0 right-0 object-cover opacity-30'
        src='/cthulhu-bg.jpg'
        alt='Background'
      />
    </div>
  )
}

export default BackgroundHome
