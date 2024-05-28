import React from 'react'
import useFetch from "./useFetch";

import { useContext } from 'react';
import { IPContext } from './IPContext';
import {useState, useEffect} from 'react'


export const Main = () => {

  const { ip } = useContext(IPContext);
  const [data] = useFetch(ip);//data de la ip inicial
  const [datos, setDatos] = useState([data]);  //data de las siguientes
  
 
  
  useEffect(() => {
    fetch(`http://ipwho.is/${ip}`)
      .then((response) => {
        return response.json()
      })
      .then((e) => {
        setDatos(e)
      })
}, [ip])
//esto hay que entenderlo  bien y ver como unirlo con la funcion ipCompleta
useEffect(() => {
  if (data) {
    setDatos(datos);
  }
}, [data]);

console.log('ip main:', ip)
console.log('datos:', datos) 
  return (
  <main className='absolute inset-y-40 mx-4 h-72 lg:h-32 w-11/12  rounded-2xl bg-Almost-White lg:grid lg:grid-cols-4 lg:mx-14'>
    <div className='flex flex-col justify-center items-center '><div className='font-rubik text-sm text-Medium-Gray font-bold tracking-widest mb-2 mt-8 lg:mt-0'>IP ADDRESS</div><div className='text-Almost-Black font-bold'> { data && data.ip}</div></div>
    <div className='flex flex-col justify-center items-center'><div className='font-rubik text-sm  text-Medium-Gray font-bold  tracking-widest mb-2 mt-4 lg:mt-0'>LOCATION</div><div className='text-Almost-Black font-bold text-center'>{data  && data.city}, {data.region}, {data.country}</div></div>
    <div className='flex flex-col justify-center items-center'><div className='font-rubik text-sm text-Medium-Gray font-bold  tracking-widest mb-2 mt-4 lg:mt-0'>TIMEZONE</div><div className='text-Almost-Black font-bold'>UTC {data && data.timezone.utc}</div></div>
    <div className='flex flex-col justify-center items-center'><div className='font-rubik text-sm  text-Medium-Gray font-bold  tracking-widest mb-2 mt-4 lg:mt-0'>ISP</div><div className='text-Almost-Black font-bold text-center'>{data && data.connection.isp}</div></div>

</main>

)
}
