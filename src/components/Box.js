import React from 'react';
export default function Box(props) {
  return (
    <React.Fragment>
      <div className={`
        ${ props.className }
        flex flex-col
        bg-white/25 backdrop-blur-md rounded-2xl shadow-glass
      `}>
        { props.children }
      </div>
    </React.Fragment>
  )
}