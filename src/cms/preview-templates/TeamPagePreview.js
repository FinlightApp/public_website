import React from 'react';
import PropTypes from 'prop-types';
import { TeamPageTemplate } from '../../templates/team-page';

const TeamPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <TeamPageTemplate title={data.title} />
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