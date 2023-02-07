import React from 'react';
import PropTypes from 'prop-types';
import { TeamPageTemplate } from '../../templates/team-page';

const TeamPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <TeamPageTemplate 
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
        teamPanel={{
          title: data.teamPanel.title,
          paragraph: data.teamPanel.paragraph,
          cards: data.teamPanel.cards,
        }}
        nonExecutiveDirectorsPanel={{
          title: data.nonExecutiveDirectorsPanel.title,
          paragraph: data.nonExecutiveDirectorsPanel.paragraph,
          cards: data.nonExecutiveDirectorsPanel.cards
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

TeamPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default TeamPagePreview