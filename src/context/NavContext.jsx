import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const navContext = createContext()
export const navColorContext = createContext()


function NavContext({children}) {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [navColor, setNavColor] = useState('white')

  const locate = useLocation().pathname
  useEffect(() => {
    if(locate == '/') setNavColor('white')
    else setNavColor('black')
  },[locate])
  
  return (
    <div>
      <navContext.Provider value={[isNavOpen, setIsNavOpen]}>
        <navColorContext.Provider value={[navColor, setNavColor]}>
          {children}
        </navColorContext.Provider>
      </navContext.Provider>
    </div>
  )
}

export default NavContext

