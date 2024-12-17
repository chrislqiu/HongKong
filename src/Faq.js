import React from 'react';
import './Faq.css';

const FAQ = ({ data }) => {
  return (
    <div className="faq-container">
      <h2 className="faq-header">Frequently Asked Questions</h2>
      <ul className="faq-list">
        {data.map((item, index) => (
          <li key={index} className="faq-item">
            <div className="faq-question">{item.question}</div>
            <div className="faq-answer">{item.answer}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
