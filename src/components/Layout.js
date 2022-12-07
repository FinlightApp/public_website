import * as React from 'react';
import Head from '../components/Head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './all.css';

const TemplateWrapper = (props) => {
  const {
    seo,
    children,
  } = props;
  return (
    <>
      <Head seo={ seo } />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default TemplateWrapper;
