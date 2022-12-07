import React from 'react';
export default function Subheader(props) {
  return (
    <React.Fragment>
      <div className='
        flex flex-col flex-0
        justify-center items-center
        w-full
        gap-12
      '>
        <h2 className={`
<<<<<<< HEAD
          ${ props.darkMode ? 'text-grey-light' : 'text-black' }
=======
          ${ props.headerClass }
>>>>>>> develop
          text-3xl text-center font-semibold font-header
        `}>
          { props.children }
        </h2>
        <div className={`
          ${ props.lineClass }
          bg-gradient-to-r from-transparent to-transparent
          w-full max-w-sm h-0.5
        `} />
      </div>
    </React.Fragment>
  )
}