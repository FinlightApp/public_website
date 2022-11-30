import React from 'react';
export default function Button(props) {
  return (
    <React.Fragment>
      <button className={`
        ${ props.darkMode ? 'text-black bg-primary' : 'text-white bg-secondary' }
        px-4 py-2
        rounded
        text-xl font-medium font-paragraph
      `}>
        { props.children }
      </button>
    </React.Fragment>
  )
}