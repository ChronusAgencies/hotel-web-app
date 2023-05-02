
import Container from '@/components/reusable/container/Container';
import React from 'react';
import style from './Navbar.module.scss';
import Toggle from '@/components/reusable/toggle/Toggle';
import Route from '@/components/reusable/route/Route';
import Image from 'next/image';
import Logo from '@/public/ImgAssets/mulia_logo.png';
import { NextPage } from 'next';
 
type TNavbarProps = {
  onClick : (event : React.MouseEvent<HTMLElement>) => void
  isActive : boolean,
  isScrolled : boolean
}

const Navbar : NextPage<TNavbarProps> = (props) => {

  const {isActive, isScrolled, onClick} = props

  return (
    <>
      <Container
        classname={`${style.container} ${isScrolled && style.isScrolled}`}
      >
        <Toggle
          classname={`${style.toggle} ${isActive && style.isActive}`}
          onClick={onClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </Toggle>
        <Route
          href={'/'}
          classname={style.logo}
        >
          <Image
            src={Logo}
            alt='logo'
            fill
          />
        </Route>
      </Container>
    </>
  )
}

export default Navbar