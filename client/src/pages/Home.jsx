import React from 'react';
import Hero from '../components/Hero';

import FeaturedMenu from '../components/FeaturedMenu';
import PageTransition from '../components/animations/PageTransition';

const Home = () => {
  return (
    <PageTransition>
      <div className="home-page">
        <Hero />
        {/* Other homepage sections will go here */}
        <FeaturedMenu />
      </div>
    </PageTransition>
  );
};

export default Home;
