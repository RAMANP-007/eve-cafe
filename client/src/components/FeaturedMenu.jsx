import React from 'react';
import MenuItem from './MenuItem';
import './FeaturedMenu.css';

const featuredItems = [
  {
    id: 1,
    name: 'Iced Caramel Macchiato',
    description: 'A refreshing blend of espresso, milk, and caramel.',
    price: '₹250',
    image: 'https://images.unsplash.com/photo-1572442388855-434064ba0944?q=80&w=1935&auto=format&fit=crop',
    tags: ['Bestseller']
  },
  {
    id: 2,
    name: 'Grilled Cheese Sandwich',
    description: 'Classic comfort food with melted cheese.',
    price: '₹300',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1935&auto=format&fit=crop',
    tags: []
  },
  {
    id: 3,
    name: 'Chocolate Chip Cookie',
    description: 'Warm and gooey chocolate chip cookie.',
    price: '₹150',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1964&auto=format&fit=crop',
    tags: ['Vegan']
  }
];

const FeaturedMenu = () => {
  return (
    <section className="featured-menu-section py-5">
      <div className="container">
        <h2 className="text-center section-title mb-5">What's Hot This Week</h2>
        <div className="row">
          {featuredItems.map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
