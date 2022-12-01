import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        heroPanel={{
          darkMode: data.heroPanel.darkMode,
          imageBg: {
            image: getAsset(data.heroPanel.imageBg.image),
            alt: data.heroPanel.imageBg.alt,
          },
          title: data.heroPanel.title,
          titleHighlight: data.heroPanel.titleHighlight,
          subHeading: data.heroPanel.subHeading,
          button: data.heroPanel.button
        }}
         servePanel={{
          serveTitle: data.serveTitle ,
          serveDescription: data.serveDescription ,
          serveCards: data.serve || { blurbs: [] },
        }}
        applyPanel={{
          darkMode: data.applyPanel.darkMode,
          imageBg: {
            image: getAsset(data.applyPanel.imageBg.image),
            alt: data.applyPanel.imageBg.alt,
          },
          title: data.applyPanel.title,
          subHeading: data.applyPanel.subHeading,
          button: data.applyPanel.button
        }}
        heading={data.heading}
        description={data.description}
        intro={data.intro || { blurbs: [] }}
        mainpitch={data.mainpitch || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
