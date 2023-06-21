import * as React from 'react';
import { Script } from "gatsby";

const ChatBot = () => {
  return (
    <>
      <div id="myLandbot" className='container h-[500px]'></div>
      <Script strategy="idle">
        {`
          var myLandbot = new Landbot.Container({
            container: '#myLandbot',
            configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-1639007-V549YKGK7PQK25SC/index.json',
          }) || [];
        `}
      </Script>
    </>
  );
};

export default ChatBot;
