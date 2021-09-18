import React from 'react';
import About from './About';
import Work from './Work';
import Contact from './Contact';

const Home = () => {
  return (
    <div style={{
      position: 'absolute', top: 96, "overflow-y": 'scroll', height: window.innerHeight - 96
    }}>
      <About />
      <Work />
      <Contact />
    </div >
  );
};

export default Home;
