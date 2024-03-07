import React, { useState, useEffect } from 'react';

const Performance = () => {
  const [prices, setPrices] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const data = await response.json();
        setPrices(data.bitcoin);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching prices:', error);
        setLoading(false);
      }
    };

    fetchPrices();
  }, []);

  return (
    <div className="performance-container">
      <h2>Performance</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="today-section">
            <div className="price-labels">
              <span>${prices.low_24h}</span>
              <span>${prices.high_24h}</span>
            </div>
            <div className="indicator-bar">
              <div className="indicator-marker" style={{ left: `${((prices.usd - prices.low_24h) / (prices.high_24h - prices.low_24h)) * 100}%` }}>
                <div className="arrow-up"></div>
                <p>${prices.usd}</p>
              </div>
            </div>
          </div>
          <div className="52week-section">
            {/* Implement 52-week high and low section here */}
          </div>
        </>
      )}
    </div>
  );
};

export default Performance;
