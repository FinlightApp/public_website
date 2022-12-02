import React from 'react';
export default function Paragraph(props) {
  return (
    <React.Fragment>
      <p className={`
        ${ props.theme?.paragraph || 'text-black' }
        text-xl text-center font-paragraph
      `}>
        { props.children }
      </p>
    </React.Fragment>
  )
}