import React from 'react';
import PropTypes from 'prop-types';
import { ContactPageTemplate } from '../../templates/contact-page';

const ContactPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    return (
      <ContactPageTemplate
        heroPanel={{
          theme: data.heroPanel.theme,
          backgroundImg: {
            src: getAsset(data.heroPanel.backgroundImg.src),
            alt: data.heroPanel.backgroundImg.alt,
          },
          title: data.heroPanel.title,
          titleHighlight: data.heroPanel.titleHighlight,
          paragraph: data.heroPanel.paragraph
        }}
        applyPanel={{
          theme: data.applyPanel.theme,
          backgroundImg: {
            src: getAsset(data.applyPanel.backgroundImg.src),
            alt: data.applyPanel.backgroundImg.alt,
          },
          title: data.applyPanel.title,
          paragraph: data.applyPanel.paragraph,
          button: data.applyPanel.button,
          modalContent: data.applyPanel.modalContent
        }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ContactPagePreview