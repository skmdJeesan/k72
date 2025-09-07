import React from 'react'
import { Link } from 'react-router-dom'

function HomeBottomText() {
  return (
    <div className='flex lg:gap-5 gap-2 lg:mb-3'>
      <Link to='/projects' className="border-2 lg:px-9 px-4 pt-[1px] uppercase rounded-full lg:text-7xl text-2xl font-semibold hover:text-[#D3FD50]">projets</Link>
      <Link to='/agence' className="border-2 lg:px-9 px-4 pt-[1px] uppercase rounded-full lg:text-7xl text-2xl font-semibold hover:text-[#D3FD50]">agence</Link>
    </div>
  )
}

export default HomeBottomText
