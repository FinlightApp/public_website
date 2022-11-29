import React from 'react';
export default function Button(props) {
  return (
    <React.Fragment>
      <button className={`
        ${ props.darkMode ? 'text-white bg-blue' : 'text-black bg-primary' }
        px-4 py-2
        rounded
        text-xl font-medium font-paragraph
      `}>
        { props.children }
      </button>
    </React.Fragment>
  )
}