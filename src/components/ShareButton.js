import * as React from "react";
import { useRef } from "react";

import share from '../img/social/share.svg';

export const ShareButton = (props) => {
  // const alertBox = useRef();
  const copyText = () => {
  navigator.clipboard.writeText(props.url);
      // const el = React.createElement('p');
      // el.innerHTML = 'Link copied to clipboard!';
      // el.classList.add('text-center', 'text-sm', 'text-green-500', 'font-medium');
  }
      return (
        <>
        <button onClick={ () => copyText() }>
          <img
          src={ share }
          alt='Share' />
        </button>
        {/* <div
            ref={ alertBox }
              >
              </div> */}
        </>
      )
}