import React from 'react';
import { Link } from 'react-router-dom';

const diplomas = [
  { id: 1, name: 'Diploma in Information Technology' },
  { id: 2, name: 'Diploma in Cybersecurity & Digital Forensics' },
  { id: 3, name: 'Diploma in Enterprise Cloud Computing & Management' },
  { id: 4, name: 'Diploma in Financial Technology' },
  { id: 5, name: 'Common ICT Programme' },
];

export default function DiplomaList({ addFavourite }) {
  return (
    <div className="container">
      <h1>Diplomas Offered</h1>
      <ul>
        {diplomas.map(diploma => (
          <li key={diploma.id}>
            <Link to={`/diplomas/${diploma.id}`}>{diploma.name}</Link>
            <button onClick={() => addFavourite(diploma.name)}>Add to Favourites</button>
          </li>
        ))}
      </ul>
    </div>
  );
}