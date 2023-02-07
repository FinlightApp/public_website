import React from 'react';
export default function Button(props) {
  return (
    <React.Fragment>
      <button className={`
        ${ props.class }
        px-4 py-2
        rounded
        text-2xl font-normal leading-5
        hover:font-medium
        transition-all transform
        ease-in-out
        delay-150
        hover:scale-105
        duration-300
        motion-reduce:transition-none motion-reduce:hover:transform-none
      `}
      onClick={ props.onClick }>
        { props.children }
      </button>
    </React.Fragment>
  )
}