import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        heroPanel={{
          theme: data.heroPanel.theme,
          backgroundImg: {
            src: getAsset(data.heroPanel.backgroundImg.src),
            alt: data.heroPanel.backgroundImg.alt,
          },
          title: data.heroPanel.title,
          titleHighlight: data.heroPanel.titleHighlight,
          paragraph: data.heroPanel.paragraph,
          button: data.heroPanel.button,
          modalContent: data.heroPanel.modalContent
        }}
        servePanel={{
          title: data.servePanel.title,
          paragraph: data.servePanel.paragraph,
          cards: data.servePanel.cards
        }}
        featurePanel={{
          title: data.featurePanel.title,
          paragraph: data.featurePanel.paragraph,
          cards: data.featurePanel.cards,
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
