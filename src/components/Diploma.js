import React from 'react';
import { useParams } from 'react-router-dom';

const modules = {
  1 : ['G121 Innovation and Practice', 'B109 Design Thinking for Business Innovation', 'C110 Programming Fundamentals I'],
  2 : ['G121 Innovation and Practice', 'B109 Design Thinking for Business Innovation', 'C110 Programming Fundamentals I'],
  3 : ['G121 Innovation and Practice', 'B109 Design Thinking for Business Innovation', 'C110 Programming Fundamentals I'],
  4 : ['G121 Innovation and Practice', 'B109 Design Thinking for Business Innovation', 'C110 Programming Fundamentals I'],
  5 : ['G121 Innovation and Practice', 'B109 Design Thinking for Business Innovation', 'C110 Programming Fundamentals I'],
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