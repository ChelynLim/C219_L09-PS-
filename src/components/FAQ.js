import React, { useState } from 'react';

const faqData = [
  { question: 'What is Republic Polytechnic?', answer: 'Republic Polytechnic is a tertiary institution in Singapore.' },
  { question: 'How do I apply?', answer: 'You can apply through our online application portal.' },
  // Add more FAQs here
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container">
      <h1>Frequently Asked Questions</h1>
      <ul className="faq-list">
        {faqData.map((faq, index) => (
          <li key={index} onClick={() => toggleFAQ(index)}>
            <h2>{faq.question}</h2>
            {activeIndex === index && <p>{faq.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}