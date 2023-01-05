import React from 'react';
export default function Button(props) {
  return (
    <React.Fragment>
      <button className={`
        ${ props.class }
        px-4 py-2
        rounded
        text-xl font-normal leading-5
      `}
      onClick={ props.onClick }>
        { props.children }
      </button>
    </React.Fragment>
  )
}