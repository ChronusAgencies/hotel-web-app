'use client';

import HeadNav from '@/components/module/headNav/HeadNav';
import Navbar from '@/components/module/navbar/Navbar';
import NavMenu from '@/components/reusable/navMenu/NavMenu';
import React, { useEffect, useState } from 'react';

const Header = () => {
  
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScroll] = useState(false);

  useEffect(
    () => {
      window.addEventListener('scroll', () => {
        let scrollPos: number = window.scrollY;
        if(scrollPos > 0){
          setIsScroll(!isScrolled)
        }
      })
    }, []
  );

  const handleTogglerClick = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };

  

  return (
    <>
      <header>
        <Navbar
          isActive={isActive}
          isScrolled={isScrolled}
          onClick={handleTogglerClick}
        />
        <HeadNav
          isActive={isActive}
        />
      </header>
    </>
  )
}

export default Header