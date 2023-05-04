import * as React from 'react';
import PropTypes from 'prop-types';
import { Script } from "gatsby";

export default function Head(props) {
  const {
    seo
  } = props;

  return (
    <>
        <meta name='author' content={ seo?.author || 'Finlight' } />
        <meta name='description' content={ seo?.description || 'Description' } />
        <meta name='keywords' content={ seo?.keywords || '' } />
        <title>{ seo?.title || 'Finlight' }</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='robots' content='index,follow' />
        <meta name='googlebot' content='notranslate' />
        <meta charSet='utf-8' />
        <meta property='og:type' content='business.business' />
        <meta property='og:title' content={ seo?.title || 'Finlight' } />
        <meta name='theme-color' content='#fff' />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-8KF6HM5V9M`}
          strategy="off-main-thread"
        />
        <Script id="gtag-config" strategy="off-main-thread" forward={[`gtag`]}>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)};
            gtag('js', new Date());
            gtag('config', 'G-8KF6HM5V9M', { page_path: location ? location.pathname + location.search + location.hash : undefined })
          `}
        </Script>
    </>
  );
}

Head.propTypes = {
    seo: PropTypes.object,
};