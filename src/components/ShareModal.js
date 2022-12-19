import * as React from 'react';
import { useEffect, useRef } from 'react';

export const ShareModal = ({ setShowModal }) => { 
  const [message, setMessage] = React.useState('');
  const timeoutIdRef = React.useRef();
  const modalRef = useRef();

  useEffect(() => {
    setMessage('Link Copied!');
    clearTimeout(timeoutIdRef.current);
    timeoutIdRef.current = setTimeout(() => {
      setMessage('');
      setShowModal(false)
    }, 2000);
}, [])
  return (
    <div className='
      absolute
      w-fit
      p-1
      bg-[#F6F6F6] rounded
    '
    ref={modalRef}>
        <p className='
          relative
          text-xs
        '>
          { message }
        </p>
    </div>
  );
};