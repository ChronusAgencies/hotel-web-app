import React from 'react';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Modal from '../modal/Modal';
import Footer from '../footer/Footer';

const Layout = ({children} : {children : React.ReactNode}) => {
  return (
    <>
      <Header/>
      <Sidebar/>
      <main>
        {children}
      </main>
      <Modal/>
      <Footer/>
    </>
  )
}

export default Layout