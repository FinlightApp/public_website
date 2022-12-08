import React from 'react';
import PropTypes from 'prop-types';
import { PartnersPageTemplate } from '../../templates/partners-page';

const PartnersPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    return (
      <PartnersPageTemplate 
        heroPanel={{
          theme: data.heroPanel.theme,
          imageBg: {
            image: getAsset(data.heroPanel.imageBg.image),
            alt: data.heroPanel.imageBg.alt,
          },
          title: data.heroPanel.title,
          titleHighlight: data.heroPanel.titleHighlight,
          paragraph: data.heroPanel.paragraph
        }}
        partnersPanel={{
          title: data.partnersPanel.title,
          paragraph: data.partnersPanel.paragraph,
          partners: data.partnersPanel.partners
        }}
        applyPanel={{
          theme: data.applyPanel.theme,
          imageBg: {
            image: getAsset(data.applyPanel.imageBg.image),
            alt: data.applyPanel.imageBg.alt,
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

PartnersPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default PartnersPagePreview