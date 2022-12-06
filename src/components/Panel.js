import React from 'react';
import Subheader from './Subheader';
import Paragraph from './Paragraph';
export default function Panel(props) {
  return (
    <React.Fragment>
      <div className='
        container
        flex flex-col
        items-center
        px-8 py-12 md:p-0 gap-12
      '>
        { props.title && (
          <Subheader
          headerClass={ 'text-black' }
          lineClass={ 'via-primary' }>
            { props.title }
          </Subheader>
        ) }
        { props.paragraph && (
          <Paragraph class={ 'via-primary w-1/2' } >
            { props.paragraph }
          </Paragraph>
        ) }
        { props.children }
      </div>
    </React.Fragment>
  )
}