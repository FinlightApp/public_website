import React, { useState } from 'react';
import {ShareModal} from './ShareModal';

import share from '../img/social/share.svg';

export const ShareButton = (props) => {
  const [showModal, setShowModal] = useState(false);

  const copyText = () => {
  navigator.clipboard.writeText(props.url);
    if (setShowModal) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }
  return (
    <div className='
      flex
      gap-2
    '>
      <button
      onClick={ () => copyText() }
      >
        <img
        src={ share }
        alt='Share' />
      </button>
      {showModal ? <ShareModal setShowModal={setShowModal} /> : null}
    </div>
  )
}