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
        teamPanel={{
          cards:{
            image: {
              image: getAsset(data.teamPanel.cards.image.image),
              alt: data.teamPanel.cards.image.alt,
            },
            title: data.teamPanel.cards.image.title,
            Subheading: data.teamPanel.cards.image.Subheading,
            linkedin: {
              image: getAsset(data.teamPanel.cards.linkedin.image),
              alt: data.teamPanel.teamCards.linkedin.alt,
              link: data.teamPanel.teamCards.linkedin.link,
            },
          },
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