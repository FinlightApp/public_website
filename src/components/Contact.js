import React from 'react';
import PropTypes from 'prop-types';

import Panel from './Panel';
import ContactCard from './ContactCard';

import location_icon from '../img/location_icon.svg';
import mail_icon from '../img/mail_icon.svg';
import linkedIn_logo from '../img/linkedin_logo.svg';

export default function Contact(props) {
  const {
    title,
    paragraph,
  } = props;

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
          title={ title }
          paragraph={ paragraph }>
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
              title={ 'Email' }
              paragraph={ 'contact@finlight.com' }
              link={ 'mailto: contact@finlight.com' } />
              <ContactCard
              image={ {
                src: location_icon,
                alt: 'Address Icon'
              } }
              title={ 'Address' }
              paragraph={ '20 St Thomas St, London, SE1 9RS' } />
              <ContactCard
              image={ {
                src: linkedIn_logo,
                alt: 'LinkedIn Icon'
              } }
              title={ 'LinkedIn' }
              paragraph={ 'linkedin.com/company/finlight' }
              link={ 'https://www.linkedin.com/company/finlight' } />
            </div>
          </Panel>
        </div>
      </div>
    </React.Fragment>
  );
}

Contact.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string
};
