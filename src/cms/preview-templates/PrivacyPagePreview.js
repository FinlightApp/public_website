import React from 'react';
import PropTypes from 'prop-types';
import { PrivacyPageTemplate } from '../../templates/privacy-page';

const PrivacyPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  
  if (data) {
    return (
      <PrivacyPageTemplate 
        heroPanel={{
          theme: data.heroPanel.theme,
          backgroundImg: {
            src: getAsset(data.heroPanel.backgroundImg.image),
            alt: data.heroPanel.backgroundImg.alt,
          },
          title: data.heroPanel.title,
          titleHighlight: data.heroPanel.titleHighlight,
          paragraph: data.heroPanel.paragraph
        }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

PrivacyPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default PrivacyPagePreview