import { useState } from 'react'
import './index.css'
import {Footer}  from  "./components/Footer"
import {Header}  from  "./components/Header"
import {Main}  from  "./components/Main"
import { IPProvider } from './components/IPContext';

 function App() {

  return (
    <>
     <IPProvider>
    <Header/>
    <Main />
    </IPProvider>
    <div id="map" className='h-64'></div>
    <Footer/>
    </>
  )
}

export default App
