import React, { useState } from 'react';
import './Accordion.css';
import Status  from './Status';

const Accordion = ({ title, content ,url}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className={`accordion ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={toggleAccordion}> 
        <div className="accordion-title"> {title} {url} <Status/>  </div>
        
        <div className={`arrow ${isOpen ? 'up' : 'down'}`}></div>
       
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
