import React from 'react'

export const Main = () => {
  return (
  <main className='absolute inset-y-40 mx-4 h-72 lg:h-32 w-11/12  rounded-2xl bg-Almost-White lg:grid lg:grid-cols-4 lg:mx-14'>
    <div className='flex flex-col justify-center items-center '><div className='font-rubik text-sm text-Medium-Gray font-bold tracking-widest mb-2 mt-8 lg:mt-0'>IP ADDRESS</div><div className='text-Almost-Black font-bold'> ip</div></div>
    <div className='flex flex-col justify-center items-center'><div className='font-rubik text-sm  text-Medium-Gray font-bold  tracking-widest mb-2 mt-4 lg:mt-0'>LOCATION</div><div className='text-Almost-Black font-bold'>lugar</div></div>
    <div className='flex flex-col justify-center items-center'><div className='font-rubik text-sm text-Medium-Gray font-bold  tracking-widest mb-2 mt-4 lg:mt-0'>TIMEZONE</div><div className='text-Almost-Black font-bold'>UTC-</div></div>
    <div className='flex flex-col justify-center items-center'><div className='font-rubik text-sm  text-Medium-Gray font-bold  tracking-widest mb-2 mt-4 lg:mt-0'>ISP</div><div className='text-Almost-Black font-bold'>claro</div></div>
</main>
)
}
