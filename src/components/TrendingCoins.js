import React, { useState, useEffect } from 'react';

const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
        const data = await response.json();
        setTrendingCoins(data.coins.slice(0, 3)); // Slice to include only the first three coins
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div>
      <h4 className='mb-4'>Trending Coins (24H)</h4>
      <div className="trending-coins">
        {trendingCoins.map((coin, index) => (
          <div key={index} className="coin py-2">
            <div className='d-flex'>
                <img className='me-2' src={coin.item.small} alt={coin.item.name} />
                <div className="coin-details">
                <h6>{coin.item.name}</h6>
                <h6>({coin.item.symbol.toUpperCase()})</h6>
                </div>
            </div>
            <button className={`px-3 ms-3 ${coin.item.data.price_change_percentage_24h.usd < 0 ? 'negative-change' : 'positive-change'}`}>
                {coin.item.data.price_change_percentage_24h.usd < 0 ? ' \u25BC' : ' \u25B2'}{' '}
                {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoins;
