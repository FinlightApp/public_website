import * as React from 'react';
import PropTypes from 'prop-types';

export default function Head(props) {
  const {
    seo
  } = props;

  return (
    <>
        <meta name='author' content={ seo.author } />
        <meta name='description' content={ seo.description } />
        <meta name='keywords' content={ seo.keywords } />
        <title>{ seo.title }</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='robots' content='index,follow' />
        <meta name='googlebot' content='notranslate' />
        <meta charSet='utf-8' />
        <meta property='og:type' content='business.business' />
        <meta property='og:title' content={ seo.title } />
        <meta name='theme-color' content='#fff' />
    </>
  );
}

Head.propTypes = {
    seo: PropTypes.object,
};