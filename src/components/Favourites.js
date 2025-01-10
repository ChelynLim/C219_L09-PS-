import React from 'react';

export default function Favourites({ favourites }) {
  return (
    <div className="container">
      <h1>Favourites</h1>
      <ul>
        {favourites.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
}