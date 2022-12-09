import * as React from "react";
import PropTypes from "prop-types";

import Panel from './Panel';

export const HTMLContent = ({ content, className }) => (
  <div className='
    flex
    justify-center
    w-full
    p-12
  '>
    <Panel>
      <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
    </Panel>
  </div>
);

const Content = ({ content, className }) => (
  <div className='
    flex
    justify-center
    w-full
    p-12
  '>
    <Panel>
      <div className={className}>{content}</div>
    </Panel>
  </div>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
