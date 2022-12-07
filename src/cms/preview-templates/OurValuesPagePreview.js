import React from 'react';
import PropTypes from 'prop-types';
import { OurValuesPageTemplate } from '../../templates/our-values-page';

const OurValuesPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    return (
      <OurValuesPageTemplate 
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
        ourValuesPanel={{
          title: data.ourValuesPanel.title,
          paragraph: data.ourValuesPanel.paragraph,
          values: data.ourValuesPanel.values
        }}
        applyPanel={{
          theme: data.applyPanel.theme,
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

OurValuesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default OurValuesPagePreview