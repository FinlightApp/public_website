import React from 'react';
export default function Subeader(props) {
  return (
    <React.Fragment>
      <div className='
        flex flex-col flex-0
        justify-center items-center
        w-full
        gap-12
      '>
        <h2 className={`
          ${ props.darkMode ? 'text-white' : 'text-black' }
          text-3xl text-center font-semibold font-header
        `}>
          { props.children }
        </h2>
        <div className={`
          ${ props.darkMode ? 'via-primary' : 'via-secondary' }
          bg-gradient-to-r from-transparent to-transparent
          w-full max-w-7xl h-0.5
        `} />
      </div>
    </React.Fragment>
  )
}