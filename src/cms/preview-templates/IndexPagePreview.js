import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        heroImageBg={ getAsset(data.heroImageBg) }
        heroImage={ getAsset(data.heroImage) }
        heroTitle={ data.heroTitle }
        heroSubHeading={ data.heroSubHeading }
        heroButton={ data.heroButton }
        applyPanel={{
          darkMode: data.applyPanel.darkMode,
          imageBg: {
            image: getAsset(entry.getIn(['data', 'applyPanel', 'imageBg', 'image'])),
            alt: entry.getIn(['data', 'applyPanel', 'imageBg', 'alt']),
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
