import * as React from "react";
import { useEffect, useRef } from "react";

export const ShareModal = ({ modal }) => { 
  const [message, setMessage] = React.useState('');
  const timeoutIdRef = React.useRef();
  const modalRef = useRef();
  
  useEffect(() => {
    setMessage('Clicked');
    clearTimeout(timeoutIdRef.current);
    timeoutIdRef.current = setTimeout(() => {
        setMessage('');
    }, 2000);
}, [])
  return (
    <div
    ref={modalRef}
    >
      <div>
        <p>{ message }</p>
      </div>
    </div>
  );
};