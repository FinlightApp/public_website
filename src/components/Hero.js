import React from 'react'
import HeroImg from '../img/new_design/Mask group.svg'
import HeroBg from '../img/new_design/Hero 1.svg'

const backgroundImage = {
  backgroundImage: `url('${HeroBg}')`,
  backgroundSize: 'cover',
  position: 'center'
};

export default function Hero() {
  return (
    <div
    style={backgroundImage}
    className='
    container
    flex flex-col lg:flex-row justify-center
    h-screen
    text-center'>
      <div className='hidden md:flex self-center justify-center  w-full'>
        <img
        src={HeroImg}
        alt='PC'
        style={{ width:'500px', height: '400px' }}/>
      </div>
      <div className='
      flex flex-col self-center
      h-auto w-full
      gap-8 p-8
      text-white'>
        <h1 className='text-2xl md:text-5xl'>
          We are making VC investing even simpler than public stock investing
        </h1>
        <p className='text-xl md:text-2xl'>
          We do more than enabling investors to allocate to top decile VCs across vintages, 
          regions and sectors from as low as 10k GBP. We also eliminate the entire admin GPs
          have to go through to on-board, serve and report to LPs.
        </p>
        <div className=''>
          <button className='px-4 py-2 
          bg-blue-600 text-white
          rounded'>
            Info Request
          </button>
        </div>
      </div>
    </div>
  )
}
