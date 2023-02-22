import React from 'react';

export const GifItem = ({ title, image }) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <img src={image} alt="title" />
    </div>
  );
};
