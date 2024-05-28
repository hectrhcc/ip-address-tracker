import React from 'react'
import { useContext } from 'react';
import { IPContext } from './IPContext';
import {useState, useEffect} from 'react'

export const Main = () => {
  const { ip } = useContext(IPContext);
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
  console.log('ip:',ip)
  console.log('datos:',datos)


  useEffect(() => {
    fetch(`https://ipwho.is/${ip}`)
      .then((response) => {
        return response.json()
      })
      .then((e) => {
        setDatos(e)
      })
}, [ip])



console.log("datos", datos)
//funciona con data. no con datos
  return (
  <main className='absolute inset-y-40 mx-4 h-72 lg:h-32 w-11/12  rounded-2xl bg-Almost-White lg:grid lg:grid-cols-4 lg:mx-14'>
    <div className='flex flex-col justify-center items-center '><div className='font-rubik text-sm text-Medium-Gray font-bold tracking-widest mb-2 mt-8 lg:mt-0'>IP ADDRESS</div><div className='text-Almost-Black font-bold'> { datos && datos.ip}</div></div>
    <div className='flex flex-col justify-center items-center'><div className='font-rubik text-sm  text-Medium-Gray font-bold  tracking-widest mb-2 mt-4 lg:mt-0'>LOCATION</div><div className='text-Almost-Black font-bold text-center'>{datos && datos.city}, {datos && datos.region}, {datos && datos.country}</div></div>
    <div className='flex flex-col justify-center items-center'><div className='font-rubik text-sm text-Medium-Gray font-bold  tracking-widest mb-2 mt-4 lg:mt-0'>TIMEZONE</div><div className='text-Almost-Black font-bold'>UTC {datos.timezone && datos.timezone.utc}</div></div>
    <div className='flex flex-col justify-center items-center'><div className='font-rubik text-sm  text-Medium-Gray font-bold  tracking-widest mb-2 mt-4 lg:mt-0'>ISP</div><div className='text-Almost-Black font-bold text-center'>{datos.connection && datos.connection.isp}</div></div>
</main>
)
}