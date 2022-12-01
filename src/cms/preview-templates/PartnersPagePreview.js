import React from 'react';
import PropTypes from 'prop-types';
import { PartnersPageTemplate } from '../../templates/partners-page';

const PartnersPagePreview = ({ entry, getAsset }) => {
  console.log('entry',entry)
  const data = entry.getIn(['data']).toJS()
  if (data) {
    return (
      <PartnersPageTemplate 
        heroPanel={{
          darkMode: data.heroPanel.darkMode,
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
          darkMode: data.applyPanel.darkMode,
          imageBg: {
            image: getAsset(data.applyPanel.imageBg.image),
            alt: data.applyPanel.imageBg.alt,
          },
          title: data.applyPanel.title,
          paragraph: data.applyPanel.paragraph,
          button: data.applyPanel.button
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