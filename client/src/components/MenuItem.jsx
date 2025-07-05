import React from 'react';
import './MenuItem.css';

const MenuItem = ({ item }) => {
  const { image, name, description, price, tags } = item;

  return (
    <div className="col-md-4 mb-4">
      <div className="card menu-item-card h-100">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{name}</h5>
          <p className="card-text flex-grow-1">{description}</p>
          <p className="card-text price fw-bold">{price}</p>
          <div className="tags">
            {tags && tags.map(tag => (
              <span key={tag} className={`badge me-1 tag-${tag.toLowerCase()}`}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
