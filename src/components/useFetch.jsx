import { useState, useEffect } from "react";

const useFetch = (userip) =>{
console.log('userip:', userip)
    const [ip,setIp] = useState({
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


useEffect(() =>{
  fetch(`https://ipwho.is/${userip}`)
  .then((response) =>{
    return response.json()
  })
  .then((data)=>{
      setIp(data)/*data.ip ok pero habia que darle todos los datos 
      ip es un objeto {ip} = Object Object
      en cambio {ip.ip} = 179.x.x.x
      */
  })
},[] )//si hago que dependa de un cambio como userip va a estar renderizando
//cada vez que agrego un numero y eso se vera molesto al usuario
//en el console log como cuando el usuario quiera ingresar otra ip ya que
//cuando borra o agrega algun numero no va a poder ingresarlo tranquilamente
//ya que se esta renderizando por cada digito que userip varie


return [ip];
}


export default useFetch;