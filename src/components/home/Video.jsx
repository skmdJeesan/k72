import React from 'react'

function Video() {
  return (
    <div className='h-full w-full'>
      <video autoPlay loop muted src="./public/video-1.mp4" className='w-full h-full object-cover'></video>
    </div>
  )
}

export default Video
