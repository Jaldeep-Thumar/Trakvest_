import React, { useState, useEffect } from 'react';
import RobustWebSocket from 'robust-websocket';

// This is our simple "phonebook" to find a stock's secret code (instrument token).
// You can find more tokens by searching online or using the Angel One API.
const instrumentLookup = {
  'RELIANCE': '2885',
  'SBIN': '3045',
  'INFY': '1594',
  'TCS': '2963',
  'HDFCBANK': '1333',
  'NIFTY 50': '26000',
};

const StockSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeStockSymbol, setActiveStockSymbol] = useState('');
  const [instrumentToken, setInstrumentToken] = useState(null); // The token to subscribe to
  const [livePrice, setLivePrice] = useState(0);
  const [error, setError] = useState('');
  const [session, setSession] = useState(null); // To store feedToken, etc.

  // 1. Get the session tokens from our backend when the component first loads.
  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await fetch('/api/get-session'); // Calls your Vercel function
        if (!response.ok) throw new Error('Could not connect to the server.');
        const data = await response.json();
        setSession(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchSession();
  }, []); // The empty [] means this runs only ONCE.

  // 2. This is the main effect for the WebSocket connection.
  // It will run whenever the 'instrumentToken' we want to track changes.
  useEffect(() => {
    // Don't connect if we don't have the session or a stock to track.
    if (!session || !instrumentToken) return;

    const ws = new RobustWebSocket('wss://ws1.angelbroking.com/aws/sensible/live/v1/stream');

    ws.onopen = () => {
      console.log('WebSocket Connected!');
      setError('');
      
      // Authorize the connection
      ws.send(JSON.stringify({ action: 'auth', params: { token: session.feedToken } }));
      
      // Subscribe to the specific stock the user searched for
      ws.send(JSON.stringify({
        action: 'subscribe',
        params: { mode: 1, instrument_tokens: [instrumentToken] },
      }));
    };

    ws.onmessage = (event) => {
      // IMPORTANT: The data is binary. You need Angel One's official method to parse it.
      // For now, this is a placeholder to show it's working.
      // In a real app, you would decode the binary data here.
      console.log('Binary data received:', event.data);
      // This is a placeholder for where you'd update the price after decoding
      // For example: `setLivePrice(decodedData.last_traded_price);`
    };

    ws.onerror = (err) => {
      console.error('WebSocket Error:', err);
      setError('Connection error. Please try again.');
    };

    // This is a cleanup function. It closes the connection when we search for a new stock.
    return () => {
      ws.close();
    };
  }, [session, instrumentToken]); // Re-run this logic if session or instrumentToken changes.


  // 3. This function runs when you submit the search form.
  const handleSearch = (e) => {
    e.preventDefault(); // Prevents the page from reloading
    setError('');
    setLivePrice(0);

    const uppercaseTerm = searchTerm.toUpperCase();
    const foundToken = instrumentLookup[uppercaseTerm];

    if (foundToken) {
      setActiveStockSymbol(uppercaseTerm);
      setInstrumentToken(foundToken); // This will trigger the useEffect above to connect!
    } else {
      setActiveStockSymbol('');
      setInstrumentToken(null);
      setError("Stock not found. Try RELIANCE, SBIN, or INFY.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-800 text-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Live Stock Tracker</h1>
      
      <form onSubmit={handleSearch}>
        <label htmlFor="stock-search" className="sr-only">Search Stock</label>
        <input
          type="text"
          id="stock-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter stock symbol (e.g., RELIANCE)"
          className="w-full px-4 py-2 text-black bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="w-full mt-3 px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 font-semibold">
          Track Price
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-lg text-gray-400">{activeStockSymbol || "Search for a stock"}</p>
        {livePrice > 0 ? (
          <p className="text-5xl font-semibold text-green-400 mt-2">₹{livePrice.toFixed(2)}</p>
        ) : (
          <p className="text-gray-500">{activeStockSymbol ? "Connecting..." : "---"}</p>
        )}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default StockSearch;