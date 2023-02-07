import React from 'react';
export default function Paragraph(props) {
  return (
    <React.Fragment>
      <p className={`
        ${ props.class }
        text-xl text-center font-normal leading-8
      `}>
        { props.children }
      </p>
    </React.Fragment>
  )
}