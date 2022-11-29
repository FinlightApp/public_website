import React from 'react';
export default function Header(props) {
  return (
    <React.Fragment>
      <div className='
        flex flex-col flex-0
        justify-center items-center
        w-full
        gap-12
      '>
        <h1 className={`
          ${ props.darkMode ? 'text-white' : 'text-black' }
          text-3xl text-center font-semibold font-h
        `}>
          { props.children }
        </h1>
        <div className={`
          ${ props.darkMode ?
            'bg-gradient-to-r from-blue/0 via-blue to-blue/0' :
            'bg-gradient-to-r from-primary/0 via-primary to-primary/0'
          }
          w-full max-w-7xl h-0.5
        `} />
      </div>
    </React.Fragment>
  )
}