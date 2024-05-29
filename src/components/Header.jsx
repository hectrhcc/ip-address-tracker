import React from 'react'
import patternBgMobile from '../../images/pattern-bg-mobile.png'; 
import patternBgDesktop from '../../images/pattern-bg-desktop.png';
import { useContext } from 'react';
import { IPContext } from './IPContext';
import { BanderaContext } from './BanderaContext';
import {useState, useEffect} from 'react'
let ipCambio= false;
export const Header = () => {
  const { ip, setIp } = useContext(IPContext);
  const { bandera, setBandera } = useContext(BanderaContext);
  //uso la api para darle a el objeto ip todos los datos de mi ip
  useEffect(() =>{
    fetch(`https://ipwho.is/${ip}`)
    .then((response) =>{
      return response.json()
    })
    .then((data)=>{
        setIp(data)/*data.ip ok pero habia que darle todos los datos 
        ip es un objeto {ip} = Object Object
        en cambio {ip.ip} = 179.x.x.x
        */
    })
  },[] )
  
  function handleChange(e) {
      setIp(e.target.value);//actualiza la ip no el objeto ip,por eso en ipCompleta se trabaja ip y no ip.ip
      ipCambio=true;
      console.log('ip nueva ', ip) //cuando es una nueva ip solo es ip no ip.ip
      }

let expreip = /^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/;

function ipCompleta(){  
  if(ipCambio==true){//cuando la ip cambia me interesa hacer la verificacion
  if(!expreip.test(ip)){ //verificar si es una ip con el formato adecuado
    console.log("no cumple:",ip); //solo ip porque no es el objeto ip a no ser que sea la primera vez ahi seria ip.ip
    console.log('bandera', bandera) //pero la primera vez nunca es el caso porque el caso comienza cuando la ip cambia asi que solo es ip
} else{
  setBandera(prev => prev+1);
  console.log('si cumple ', ip)
  console.log('bandera', bandera)
}
}
else{
  console.log('no se ejecuta porque es otro formato y la ip no ha cambiado')
}
}  
  return (
    <header className=' relative bg-cover bg-center bg-no-repeat  lg:pb-16 pb-32 ' style={{ 
      backgroundImage: `url(${patternBgMobile})` 
      }}>   
       <div className='flex items-center justify-center pt-0'>
        <h1 className='font-rubik font-medium text-2xl mb-6 font-semibold pt-6 text-Almost-White lg:z-10'> IP Address Tracker </h1>
        </div>
        <div className='flex items-center justify-center pt-0'>
        <input className='text-lg cursor-pointer rounded-l-xl px-12 py-4 mb-5 bg-Almost-White text-Almost-Black lg:z-10'  placeholder='Search for any IP address or domain' value={ip.ip} onChange={handleChange}/>
        <button className='cursor-pointer bg-Almost-Black rounded-r-xl  font-bold py-7.5 px-7 mb-5  bg-center bg-no-repeat lg:z-10 bg-icon-arrow' style={{  fontWeight: '800'}} onClick={ipCompleta}></button>
        <div className="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat z-[0]" style={{ backgroundImage: `url(${patternBgDesktop})`,backgroundSize: 'auto', backgroundPosition: '50% 0%', zIndex:0}}></div>
        </div>
    </header>
  )
}