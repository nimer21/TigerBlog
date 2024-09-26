import React from 'react'
import MainHeader from './MainHeader'
import MainHeaderMobile from './MainHeaderMobile'
import dynamic from 'next/dynamic';

//const MainHeader = dynamic(() => import('./MainHeader'), { ssr: false});

export default function Header() {
  return (
    <header>
        <div className='show-on-desktop'>
            <MainHeader/>            
        </div>        
        <div className='show-on-mobile'>
            <MainHeaderMobile/>            
        </div>        
    </header>
  )
}
