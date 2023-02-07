import * as React from "react";
import PropTypes from "prop-types";

import Panel from './Panel';

export const HTMLContent = ({ content, className }) => (
    <Panel>
      <div className='grid grid-cols-10'>
        <div className='
          col-span-10
          xl:col-start-2 xl:col-span-8
          flex flex-col
          px-4 md:px-8 py-8 md:py-16 gap-16
        '>
          <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </Panel>
);

const Content = ({ content, className }) => (
    <Panel>
      <div className='grid grid-cols-10'>
        <div className='
          col-span-10
          xl:col-start-2 xl:col-span-8
          flex flex-col
          px-4 md:px-8 py-8 md:py-16 gap-16
        '>
          <div className={className}>{content}</div>
        </div>
      </div>
    </Panel>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
