import React from 'react';

import Panel from './Panel';
import ContactCard from './ContactCard';

import location_icon from '/static/img/location.png';
import mail_icon from '/static/img/email.png';
import linkedIn_logo from '/static/img/linkedin.png';

export default function Contact() {
  return (
    <React.Fragment>
      <div className='
        flex
        justify-center
        h-fit
      '>
        <div className='
          flex
          justify-center
          w-full
          p-12
        '>
          <Panel
          title='Where you can find us'>
            <div className='
              flex flex-wrap
              justify-center
              w-full
              gap-12
            '>
              <ContactCard
              image={ {
                src: mail_icon,
                alt: 'Email Icon'
              } }
              title={ 'Email us at' }
              paragraph={ 'contact@finlight.com' }
              link={ 'mailto: {contact@finlight.com}' } />
              <ContactCard
              image={ {
                src: location_icon,
                alt: 'Address Icon'
              } }
              title={ 'Find us in' }
              paragraph={ '20 St Thomas St, London, SE1 9RS' }
              link={ 'https://goo.gl/maps/81QG6ygdkBd8es556' } />
              <ContactCard
              image={ {
                src: linkedIn_logo,
                alt: 'LinkedIn Icon'
              } }
              title={ 'Follow us on' }
              paragraph={ 'Linkedin' }
              link={ 'https://www.linkedin.com/company/finlight' } />
            </div>
          </Panel>
        </div>
      </div>
    </React.Fragment>
  );
}