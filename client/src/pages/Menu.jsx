import React, { useState } from 'react';
import { menuData } from '../menuData';
import MenuItem from '../components/MenuItem';
import PageTransition from '../components/animations/PageTransition';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Coffee');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const categories = Object.keys(menuData);

  return (
    <PageTransition>
      <div className="container menu-page py-5">
        <h1 className="text-center section-title mb-5">Our Menu</h1>

        <div className="text-center mb-5">
          {categories.map(category => (
            <button 
              key={category} 
              className={`btn btn-outline-dark mx-1 ${activeCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="row">
          {menuData[activeCategory].map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Menu;
