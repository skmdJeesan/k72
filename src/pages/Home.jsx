import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import HomeParaText from '../components/home/HomeParaText'

function Home() {
  return (
    <div className='w-full h-full'>
      <div className="w-full h-full fixed"><Video /></div>
      <div className="w-full h-full relative flex flex-col items-center lg:justify-between justify-center lg:gap-8 gap-12 overflow-hidden">
        <HomeHeroText />
        <HomeParaText />
        <HomeBottomText />
      </div>
    </div>
  )
}

export default Home
