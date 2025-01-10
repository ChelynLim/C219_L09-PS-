import React from 'react';
import { Link } from 'react-router-dom';

const diplomas = [
  { id: 1, name: 'Diploma in Information Technology' },
  { id: 2, name: 'Diploma in Cybersecurity' },
  { id: 3, name: 'Diploma in Data Science' },
];

export default function DiplomaList() {
  return (
    <div className="container">
      <h1>Diplomas Offered</h1>
      <ul>
        {diplomas.map(diploma => (
          <li key={diploma.id}>
            <Link to={`/diplomas/${diploma.id}`}>{diploma.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}