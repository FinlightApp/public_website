import React from 'react';
import PropTypes from 'prop-types';

const Team = (props) => {
  const {
    title
  } = props;

  return (
    <React.Fragment>
      <div>
        <h1>{title}</h1>
      </div>
    </React.Fragment>
  );
}

Team.propTypes = {
  title: PropTypes.string,
};

export default Team