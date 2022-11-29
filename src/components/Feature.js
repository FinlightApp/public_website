import React from 'react';
import Icon from '/static/img/investment_consultant.svg'

export default function Feature() {

  const cards = [
    { title: 'Investment Consultant', icon: Icon },
    { title: 'Family Offices', icon: Icon },
    { title: 'Qualified Investors', icon: Icon },
  ]
  return (
    <React.Fragment>
      <div className='
        flex flex-col
        justify-center items-center
        w-full h-fit
      '>
        <div className='
          container flex-1
          flex flex-col
          justify-center items-center
          p-12 gap-12
        '>
          <h2 className='text-black font-semibold text-3xl'>
            Key Features
          </h2>
          <hr className='
            h-[3px] w-1/3
            border-transparent
            bg-gradient-to-r from-transparent via-primary to-transparent
          ' />
          <p className='
            lg:w-1/2
            text-center
            text-black font-normal text-xl
          '>
            We help Private allocators, family offices, banks, OCIOs…
            build high quality VC portfolio from as low as 10k GBP through dedicated EU and UK SPV
            we maintain on their behalf
          </p>       
          <div className='
            flex-1
            flex flex-col md:flex-row
            flex-wrap
            justify-center items-center
            gap-12
          '> 
          { cards.map((card) => ( 
            <div className='
              flex flex-col
              justify-center items-center
              lg:w-96 h-fit w-fit
              p-6 gap-6
              border rounded-2xl drop-shadow-lg bg-white
            '>
              <img className='w-44 h-44'
              src={ Icon }
              alt="icon" />
              <p className='
                text-center
                text-black font-semibold text-xl
              '>
              { card.title }
              </p>
            </div>
            )) }
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
