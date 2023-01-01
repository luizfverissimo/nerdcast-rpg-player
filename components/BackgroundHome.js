import { useEffect, useState } from "react"

function BackgroundHome() {
  const [selectedBackground, setSelectedBackground] = useState('')
  const backgrounds = [
    '/cthulhu-bg.jpg',
    '/cyberpunk-bg.jpg',
    '/ghanor-bg.jpg'
  ]
  useEffect(() => {
    setSelectedBackground(backgrounds[Math.floor(Math.random() * backgrounds.length)])
  }, [])

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 w-full min-h-screen'>
      <img
        className='absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full max-h-screen z-under-10 opacity-30'
        src={selectedBackground}
        alt='Background'
      />
    </div>
  )
}

export default BackgroundHome
