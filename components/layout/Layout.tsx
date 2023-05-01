import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { TGlobalComponentsProps } from '@/utils/types/types';
import Sidebar from './Sidebar/Sidebar';
import BookingForm from './BookingForm/BookingForm';


const Layout = ({children} : TGlobalComponentsProps) => {
  return (
    <>
      <Header/>
      <main>
        {children}
      </main>
      <Sidebar/>
      <BookingForm/>
      <Footer/>
    </>
  )
}

export default Layout