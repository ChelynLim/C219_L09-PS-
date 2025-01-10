import React from 'react';
import { useParams } from 'react-router-dom';

const modules = {
  "General Modules" : ['G121 Innovation and Practice', 'G123 Singapore, the World and I', 'G132 Designing Your Life (Future-Ready I)'],
  "Discipline Modules": ['C110 Programming Fundamentals I', 'C112 Introduction to Business Process and Automation', 'C206 Software Development Process'],
  "Elective Modules": ['B101 Entrepreneurshipp', 
'B109 Design Thinking for Business Innovation'
,'B216 Marketing'
,'B218 Business Statistics'
,'B239 Digital Marketing and eCommerce'
,'C218 UI/UX Design for Apps'
,'C229 Cloud Computing Essentials'
,'C270 DevOps Essentials'
,'C303 IT Project Management'
,'C304 Cloud Application Development'
,'C340 RPA for Business'
,'C372 Payment Technologies'],
  "Industry Orientation Programme Modules": ['C300 Project', 'C939 Corporate Innovation Immersion Programme', 'C937 Entrepreneurial Immersion Programme', 'C935 Industry Immersion Programme', 'C935 Industry Immersion Programme'],
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