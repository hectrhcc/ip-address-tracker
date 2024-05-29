import React from 'react'
import './index.css'
import {Header}  from  "./components/Header"
import {Main}  from  "./components/Main"
import { IPProvider } from './components/IPContext';
import { BanderaProvider } from './components/BanderaContext';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

 function App() {
  useEffect(() => {
    // Crea el mapa de Leaflet y establece la vista
    const map = L.map('map').setView([51.505, -0.09], 13);
  
    // Agrega tiles de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    // Agrega un marcador
    L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('Un bonito popup de CSS.<br> Fácilmente personalizable.')
      .openPopup();
  }, []);
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
