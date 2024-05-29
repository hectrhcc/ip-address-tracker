import { useState } from 'react'
import './index.css'
import {Footer}  from  "./components/Footer"
import {Header}  from  "./components/Header"
import {Main}  from  "./components/Main"
import { IPProvider } from './components/IPContext';
import { BanderaProvider } from './components/BanderaContext';

 function App() {

  return (
    <>
     <IPProvider>
      <BanderaProvider>
    <Header/>
    <Main />
    </BanderaProvider>
    </IPProvider>
    <div id="map" className='h-64'></div>
    <Footer/>
    </>
  )
}

export default App
