import React from "react";
import PropTypes from "prop-types";
import { getImage } from "gatsby-plugin-image";

import Panel from './Panel';
import DirectorsCard from "./DirectorsCard";

export default function Directors(props) {
  const { 
    title, 
    directors,
  } = props;

  return (
    <React.Fragment>
      <div className='
        flex
        justify-center
        h-fit
      '>
        { ( title || directors ) && (
          <div className='
            flex
            justify-center
            w-full
            p-12
          '>
            <Panel
            title={ title }>
              { directors && (
              <div className='
                flex flex-wrap
                justify-center
                w-full
                gap-12
              '>
                { directors.map((director, i) => (
                  <DirectorsCard key={ i }
                  directorImage={ {
                    image : getImage(director.directorImage.image) || director.directorImage.image
                  } }
                  name={ director.name }
                  position={ director.position }
                  link={ director.link } />
                )) }
              </div>
              ) }
            </Panel>
          </div>
        ) }
      </div>
    </React.Fragment>
  );
}

Directors.propTypes = {
  title: PropTypes.string,
  directors: PropTypes.array
};