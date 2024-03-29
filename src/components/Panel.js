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
        gap-12
      '>
        { props.title && (
          <Subheader
          headerClass={ 'text-black' }
          lineClass={ 'via-primary' }>
            { props.title }
          </Subheader>
        ) }
        { props.paragraph && (
          <Paragraph class={ 'lg:w-3/4' } >
            { props.paragraph }
          </Paragraph>
        ) }
        { props.children }
      </div>
    </React.Fragment>
  )
}