import React from 'react';
import Box from './Box';
import closeIcon from '../img/close_24.svg';

export default function Modal(props) {
  const contentEl = React.useRef();
  const content = new DOMParser().parseFromString(props.content, 'text/html').body.firstChild;

  React.useEffect(() => {
    if(content) {
      contentEl.current.replaceChildren(content);
    }
  })
  return (
    <React.Fragment>
      <div className={`
        ${props.active ? 'flex' : 'hidden'}
        fixed inset-0
        z-20
        bg-black/50
      `}>
        <div className='
          container
          grid grid-cols-10
          items-center
          px-8 py-12 md:p-0
        '>
          <Box className='
            col-span-10
            md:col-start-3 md:col-span-6
            xl:col-start-4 xl:col-span-4
            h-fit min-h-[25rem]
            bg-white
          '>
            <div className='
              flex flex-0
              justify-between items-center
              w-full
            '>
              <p className='font-medium'>
                { props.title }
              </p>
              <button className='
                flex 
                justify-center items-center
                w-12 h-12
              ' onClick={props.onClose}>
                <img className='h-4 w-4' src={closeIcon} alt='close' />
              </button>
            </div>
            <div className='
              flex flex-1
              justify-center
            '
            ref={ contentEl }>
              { props.children }
            </div>
          </Box>
        </div>
      </div>
    </React.Fragment>
  );
}
