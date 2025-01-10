import React from 'react';
import { useParams } from 'react-router-dom';

const modules = {
  1: ['Module 1', 'Module 2', 'Module 3'],
  2: ['Module A', 'Module B', 'Module C'],
  3: ['Module X', 'Module Y', 'Module Z'],
};

export default function Diploma() {
  const { diplomaId } = useParams();
  const diplomaModules = modules[diplomaId] || [];

  return (
    <div className="container">
      <h1>Modules</h1>
      <ul>
        {diplomaModules.map((module, index) => (
          <li key={index}>{module}</li>
        ))}
      </ul>
    </div>
  );
}