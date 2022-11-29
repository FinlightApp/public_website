import React from 'react';
export default function Box(props) {
  return (
    <React.Fragment>
      <div className={`
        ${ props.class }
        flex flex-col flex-0
        justify-center items-center
        px-8 py-12 gap-12
        bg-white/25 backdrop-blur-md rounded-2xl shadow-glass
      `}>
        { props.children }
      </div>
    </React.Fragment>
  )
}