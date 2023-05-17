import React, { useState } from 'react';

const Parent = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="parent">
        <h1>Parent Component</h1>
        <div className='child1'>
        <ChildButton option="Option 1" onClick={handleOptionClick} />
        </div>
        <div className='child2'>
        <ChildButton option="Option 2" onClick={handleOptionClick} />
        </div>
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

const ChildButton = ({ option, onClick }) => {
  const handleButtonClick = () => {
    onClick(option);
  };

  return (
    <div className="child">
      <button onClick={handleButtonClick}>{option}</button>
    </div>
  );
};

export default Parent;
