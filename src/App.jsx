import React from 'react'
import './index.css'
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
    </>
  )
}

export default App
