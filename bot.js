import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ArbitrageBot() {
  const [userOptIn, setUserOptIn] = useState(false);
  const [manualResponse, setManualResponse] = useState('');
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/arbitrage-opportunities')
      .then((response) => {
        setTrades(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleOptInChange = (event) => {
    setUserOptIn(event.target.checked);
  };

  const handleManualResponseChange = (event) => {
    setManualResponse(event.target.value);
  };

  const handleTradeInitiation = (trade) => {
    axios.post('http://localhost:5000/initiate-trade', {
      trade: trade,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Arbitrage Bot</h1>
      <form>
        <label>Opt-in to accept bot decisions:</label>
        <input type="checkbox" checked={userOptIn} onChange={handleOptInChange} />
        <br />
        <label>Manual response:</label>
        <input type="text" value={manualResponse} onChange={handleManualResponseChange} />
        <br />
        <button onClick={() => handleTradeInitiation(trades[0])}>Initiate Trade</button>
      </form>
      <h2>Trades:</h2>
      <ul>
        {trades.map((trade) => (
          <li key={trade.id}>
            <span>{trade.symbol}</span>
            <span>{trade.price}</span>
            <span>{trade.quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArbitrageBot;
