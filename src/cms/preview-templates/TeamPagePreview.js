import React from 'react';
import PropTypes from 'prop-types';
import { TeamPageTemplate } from '../../templates/team-page';

const TeamPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <TeamPageTemplate 
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
        nonExecutiveDirectorsPanel={{
          title: data.nonExecutiveDirectorsPanel.title,
          paragraph: data.nonExecutiveDirectorsPanel.paragraph,
          nonExecutiveDirectors: data.nonExecutiveDirectorsPanel.nonExecutiveDirectors
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

TeamPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default TeamPagePreview