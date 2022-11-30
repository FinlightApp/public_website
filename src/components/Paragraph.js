import React from 'react';
export default function Paragraph(props) {
  return (
    <React.Fragment>
      <p className={`
        ${ props.darkMode ? 'text-white font-light' : 'text-black' }
        text-xl text-center font-paragraph
      `}>
        { props.children }
      </p>
    </React.Fragment>
  )
}