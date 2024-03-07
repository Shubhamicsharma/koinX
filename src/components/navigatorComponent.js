import React, { useState } from 'react';

const OptionsList = () => {
  const [selectedOption, setSelectedOption] = useState('Overview');

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="options-list mt-4 pb-0">
      <button
        className={`option ${selectedOption === 'Overview' ? 'selected' : ''}`}
        onClick={() => handleSelect('Overview')}
      >
        Overview
      </button>
      <button
        className={`option ${selectedOption === 'Fundamentals' ? 'selected' : ''}`}
        onClick={() => handleSelect('Fundamentals')}
      >
        Fundamentals
      </button>
      <button
        className={`option ${selectedOption === 'News Insights' ? 'selected' : ''}`}
        onClick={() => handleSelect('News Insights')}
      >
        News Insights
      </button>
      <button
        className={`option ${selectedOption === 'Sentiments' ? 'selected' : ''}`}
        onClick={() => handleSelect('Sentiments')}
      >
        Sentiments
      </button>
      <button
        className={`option ${selectedOption === 'Team' ? 'selected' : ''}`}
        onClick={() => handleSelect('Team')}
      >
        Team
      </button>
      <button
        className={`option ${selectedOption === 'Technicals' ? 'selected' : ''}`}
        onClick={() => handleSelect('Technicals')}
      >
        Technicals
      </button>
      <button
        className={`option ${selectedOption === 'Tokenomics' ? 'selected' : ''}`}
        onClick={() => handleSelect('Tokenomics')}
      >
        Tokenomics
      </button>
    </div>
  );
};

export default OptionsList;
