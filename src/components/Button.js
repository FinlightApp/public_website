import React from 'react';
export default function Button(props) {
  return (
    <React.Fragment>
      <button className={`
        ${ props.theme?.button || 'bg-primary text-black' }
        px-4 py-2
        rounded
        text-xl font-medium font-paragraph
      `}>
        { props.children }
      </button>
    </React.Fragment>
  )
}