import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Stack } from 'react-bootstrap';

const getTimePeriodInDays = (timePeriod) => {
  switch (timePeriod) {
    case '1H':
      return 1 / 24;
    case '24H':
      return 1;
    case '7D':
      return 7;
    case '1M':
      return 30;
    case '3M':
      return 90;
    case '6M':
      return 180;
    case '1Y':
      return 365;
    case 'All':
      return 'max';
    default:
      return 1;
  }
};

const BitcoinChart = () => {
  const [coinData, setCoinData] = useState(null);
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        type: 'area',
        height: 500,
        width: 1000,
        background: 'white',
        toolbar: {
            show: false, // Remove the toolbar
        },
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800, // Adjust the speed as needed
            animateGradually: {
              enabled: true,
              delay: 200, // Adjust the delay as needed
            },
            dynamicAnimation: {
              enabled: true,
              speed: 500, // Adjust the speed as needed
            },
          },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 1.5,
        lineCap: 'butt',
        colors: ['#0052FE'],
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0.5,
          stops: [0, 100]
        }
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return val.toFixed(0); // Ensure that y-axis values are displayed without decimals
          },
          style: {
            colors: '#787878',
          },
        },
        borderColor: '#999',
        label: {
          show: true,
          text: 'Support',
          style: {
            color: "#fff",
            background: '#00E396'
          }
        },
        tickAmount: 5,
      },
      xaxis: {
        type: 'datetime',
        labels: {
          style: {
            colors: '#787878',
          },
        },
        timezone: 'gmt+5:30'
      },
      tooltip: {
        style: {
          fontSize: '12px',
          fontFamily: undefined,
        },
        y: {
          formatter: (value) => `$${value.toFixed(0)}`,
        },
        marker: {
            show: false,
        },
      },
      grid: {
        show: true,
        borderColor: '#e0e0e0',
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      markers: {
        size: 0,
        strokeColors: '#0052FE',
        strokeWidth: 1,
        hover: {
          size: 5,
        },
      },
      colors: ['#0052FE'],
    },
    series: [{}],
  });

  const [timePeriod, setTimePeriod] = useState('24H');

  const fetchData = async () => {
    try {
      const coinResponse = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin');
      const coinData = await coinResponse.json();
      setCoinData(coinData);
      
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${getTimePeriodInDays(
          timePeriod
        )}`
      );
      const data = await res.json();
      let tickInterval = 24 * 60 * 60 * 1000; // Default to 1 day
      let numberOfPoints = 10;
      switch (timePeriod) {
        case '1H':
          tickInterval = 6 * 60 * 60 * 1000; // 6 hours
          numberOfPoints = 10;
          break;
        case '24H':
          tickInterval = 2 * 60 * 60 * 1000; // 2 hours
          numberOfPoints = 12;
          break;
        case '7D':
          tickInterval = 24 * 60 * 60 * 1000; // 1 day
          numberOfPoints = 7;
          break;
        case '1M':
          tickInterval = 3 * 24 * 60 * 60 * 1000; // 3 days
          numberOfPoints = 10;
          break;
        case '3M':
          tickInterval = 10 * 24 * 60 * 60 * 1000; // 10 days
          numberOfPoints = 9;
          break;
        case '6M':
          tickInterval = 15 * 24 * 60 * 60 * 1000; // 15 days
          numberOfPoints = 12;
          break;
        case '1Y':
          tickInterval = 30 * 24 * 60 * 60 * 1000; // 30 days
          numberOfPoints = 12;
          break;
        case 'All':
          // Handle 'All' case if needed
          break;
        default:
          break;
      }
      setChartData({
        options: {
          ...chartData.options,
          xaxis: {
            ...chartData.options.xaxis,
            min: data.prices[0][0],
            max: data.prices[data.prices.length - 1][0],
            tickAmount: numberOfPoints,
            tickInterval: tickInterval
          },
        },
        series: [
          {
            data: data.prices.map((price) => [price[0], price[1]]),
          },
        ],
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [timePeriod]);

  const handleTimePeriodChange = (period) => {
    setTimePeriod(period);
  };

  return (
    <div className='py-5'>
      {coinData && (
        <div className='chart-header mb-4 pb-4' >
          <Stack direction='horizontal' gap={2}>
            <img src={coinData.image.small} alt={coinData.name} />

            <h2>{coinData.name}</h2>
            <p className='pt-3' style={{color: '#70788A', fontWeight: 'bold'}}>{coinData.symbol.toUpperCase()}</p>
            <button className='rank-button ms-3 px-2 py-2'>Rank #{coinData.market_cap_rank}</button>
          </Stack>
          
          <Stack direction='horizontal' gap={3} className='price-info mt-4'>
            <h2 className='dollar-price'>${coinData.market_data.current_price.usd.toLocaleString()}</h2>
            <button className={`px-3 ms-3 ${coinData.market_data.price_change_percentage_24h < 0 ? 'negative-change' : 'positive-change'}`}>
              {coinData.market_data.price_change_percentage_24h < 0 ? ' \u25BC' : ' \u25B2'}{' '}
              {coinData.market_data.price_change_percentage_24h.toFixed(2)}%
            </button>
            <p style={{color: '#768396', transform : 'translateY(25%)'}}>(24H)</p>
          </Stack>
          <div className='price-info'>
            <h5 className='inr-price'>₹{coinData.market_data.current_price.inr.toLocaleString()}</h5>
          </div>
        </div>
      )}
      <div  className='d-flex mb-4'>
        <div className='chart-name ps-3'>Bitcoin Price Chart (USD)</div>
        <div className="header ms-auto">
            <button onClick={() => handleTimePeriodChange('1H')} className={timePeriod === '1H' ? 'timeline-active-button' : 'timeline-button'}>
            1H
            </button>
            <button onClick={() => handleTimePeriodChange('24H')} className={timePeriod === '24H' ? 'timeline-active-button' : 'timeline-button'}>
            24H
            </button>
            <button onClick={() => handleTimePeriodChange('7D')} className={timePeriod === '7D' ? 'timeline-active-button' : 'timeline-button'}>
            7D
            </button>
            <button onClick={() => handleTimePeriodChange('1M')} className={timePeriod === '1M' ? 'timeline-active-button' : 'timeline-button'}>
            1M
            </button>
            <button onClick={() => handleTimePeriodChange('3M')} className={timePeriod === '3M' ? 'timeline-active-button' : 'timeline-button'}>
            3M
            </button>
            <button onClick={() => handleTimePeriodChange('6M')} className={timePeriod === '6M' ? 'timeline-active-button' : 'timeline-button'}>
            6M
            </button>
            <button onClick={() => handleTimePeriodChange('1Y')} className={timePeriod === '1Y' ? 'timeline-active-button' : 'timeline-button'}>
            1Y
            </button>
            <button onClick={() => handleTimePeriodChange('All')} className={timePeriod === 'All' ? 'timeline-active-button' : 'timeline-button'}>
            ALL
            </button>
        </div>
      </div>
      <div id="chart-timeline">
        <ReactApexChart options={chartData.options} series={chartData.series} type="area" height={400} />
      </div>
    </div>
  );
};

export default BitcoinChart;
