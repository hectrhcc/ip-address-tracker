import React from 'react'
import { useContext } from 'react';
import { IPContext } from './IPContext';
import { BanderaContext } from './BanderaContext';
import {useState, useEffect} from 'react'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import locationIcon from '../../images/icon-location.png';


export const Main = () => {
  const { ip } = useContext(IPContext);
  const { bandera } = useContext(BanderaContext);
  const [datos, setDatos] = useState({  
    "ip": '',
    "success":"",
    "type": "",
    "continent": "",
    "continent_code": "",
    "country": "",
    "country_code": "",
    "region": "",
    "region_code": "",
    "city": "",
    "latitude":"",
    "longitude":"",
    "is_eu":"",
    "postal": "",
    "calling_code": "",
    "capital": "",
    "borders": "",
    flag:{
        "img": "",
        "emoji": "",
        "emoji_unicode": ""
    },
    connection:{
        "asn": "",
        "org": "",
        "isp": "",
        "domain": ""
    },
    timezone:{
        "id": "",
        "abbr": "",
        "is_dst": "",
        "offset": "",
        "utc": "",
        "current_time": ""
    },
    currency:{
        "name": "",
        "code": "",
        "symbol": "",
        "plural": "",
        "exchange_rate": ""
    },
    security:{
        "anonymous":"" ,
        "proxy": "",
        "vpn": "",
        "tor": "",
        "hosting":"" 
    }
})



const [mapLocation, setMapLocation] = useState({
  lat: 0, 
  lng: 0
});

console.log("coordenadas:", mapLocation)
 // Inicializa el mapa cuando cambia la ubicación
 useEffect(() => {
  const map = L.map('map').setView([mapLocation.lat, mapLocation.lng], 13);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom:37,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  const customIcon = L.icon({
    iconUrl: locationIcon,
    iconSize: [22, 30], 
    iconAnchor: [16, 30],
    popupAnchor: [0, 30]
  });
  const marker = L.marker([mapLocation.lat, mapLocation.lng], { icon: customIcon }).addTo(map);
  const circle = L.circle([mapLocation.lat, mapLocation.lng], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
  }).addTo(map);

  const polygon = L.polygon([
    [mapLocation.lat, mapLocation.lng],
    [mapLocation.lat, mapLocation.lng],
    [mapLocation.lat, mapLocation.lng]
  ]).addTo(map);

  marker.bindPopup("<b>Hola</b><br>Soy un popup.").openPopup();
  circle.bindPopup("Soy un circulito :)");
  polygon.bindPopup("Soy un polygono =)");

  const popup = L.popup()
    .setLatLng([mapLocation.lat, mapLocation.lng])
    .setContent("esta es la zona aprox")
    .openOn(map);

  function onMapClick(e) {
    alert("Hiciste click en el mapa en " + e.latlng);
  }

  map.on('click', onMapClick);

  return () => {
    map.remove(); // Limpia el mapa cuando el componente se desmonta
  };
}, [mapLocation]);

//uso la api para darle a el objeto datos todos los datos de mi ip
  useEffect(() =>{
    fetch(`https://ipwho.is/${ip}`)
    .then((response) =>{
      return response.json()
    })
    .then((dat)=>{
        setDatos(dat)//JSON.stringify(dat)
    })
  },[] )
  

//los datos cuando la nueva ip
  useEffect(() => {
    fetch(`https://ipwho.is/${ip}`)
      .then((response) => {
        return response.json()
      })
      .then((e) => {
        setDatos(e)
        setMapLocation({
          lat: e.latitude,
          lng: e.longitude
        });
      })
}, [bandera])

  return (
    <>
  <main className='absolute inset-y-40 mx-4 h-80 lg:h-32 w-11/12  rounded-2xl bg-Almost-White lg:grid lg:grid-cols-4 lg:mx-14 sm:pb-20 lg:pb-0'>
    <div className='flex flex-col justify-center items-center '><div className='font-rubik text-sm text-Medium-Gray font-bold tracking-widest mb-2 mt-8 lg:mt-0'>IP ADDRESS</div><div className='text-Almost-Black font-bold'> { datos && datos.ip}</div></div>
    <div className='flex flex-col justify-center items-center'><div className='font-rubik text-sm  text-Medium-Gray font-bold  tracking-widest mb-2 mt-4 lg:mt-0'>LOCATION</div><div className='text-Almost-Black font-bold text-center'>{datos && datos.city}, {datos && datos.region}, {datos && datos.country}
    </div></div>
    <div className='flex flex-col justify-center items-center'><div className='font-rubik text-sm text-Medium-Gray font-bold  tracking-widest mb-2 mt-4 lg:mt-0'>TIMEZONE</div><div className='text-Almost-Black font-bold'>UTC {datos.timezone && datos.timezone.utc}</div></div>
    <div className='flex flex-col justify-center items-center'><div className='font-rubik text-sm  text-Medium-Gray font-bold  tracking-widest mb-2 mt-4 lg:mt-0'>ISP</div><div className='text-Almost-Black font-bold text-center'>{datos.connection && datos.connection.isp}</div></div>
  </main>
</>
)
}


