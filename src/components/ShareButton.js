import * as React from "react";
import {ShareModal} from "./ShareModal";

import share from '../img/social/share.svg';

export const ShareButton = (props) => {
  const [showModal, setShowModal] = React.useState(false);

  const copyText = () => {
  navigator.clipboard.writeText(props.url);
    if (setShowModal) {
      setShowModal(true);
    }
  }
      return (
        <>
          <button
          onClick={ () => copyText() }
          >
            <img
            src={ share }
            alt='Share' />
          </button>
          {showModal ? <ShareModal modal={setShowModal} /> : null}
        </>
      )
}