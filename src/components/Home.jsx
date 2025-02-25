import React, { useEffect, useState } from 'react';
import About from './About';
import Contact from './Contact';
import Work from './Work';

const Home = ({ setTopBarValue }) => {
  const [isHome, setIsHome] = useState(true);
  const [isWork, setIsWork] = useState(false);
  const [isContact, setIsContact] = useState(false);

  useEffect(() => {
    if (isHome) setTopBarValue(0);
    if (isWork) setTopBarValue(1);
    if (isContact) setTopBarValue(2);
  }, [isHome, isWork, isContact]);

  const handleScroll = (e) => {
    const windowHeight = window.innerHeight;
    const workTop = document.getElementById('work').getBoundingClientRect().top;
    const contactTop = document.getElementById('contact').getBoundingClientRect().top;
    const isAtBottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    const isAtHome = workTop > windowHeight / 2;
    if (isHome !== isAtHome) setIsHome(isAtHome);
    const isAtWork = workTop < windowHeight / 2;
    if (isWork !== isAtWork) setIsWork(isAtWork);
    const isAtContact = contactTop < windowHeight / 2 || isAtBottom;
    if (isContact !== isAtContact) setIsContact(isAtContact);
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: 96,
        overflowY: 'scroll',
        height: window.innerHeight - 96,
      }}
      onScroll={handleScroll}
    >
      <About />
      <Work />
      <Contact />
    </div>
  );
};

export default Home;
