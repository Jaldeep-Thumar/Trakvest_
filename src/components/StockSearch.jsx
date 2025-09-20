import React, { useState, useEffect } from 'react';
// We don't need the WebSocket for this version, but you can add it back later for live data.

const instrumentLookup = {
  'RELIANCE': '2885',
  'SBIN': '3045',
  'INFY': '1594',
  'TCS': '2963',
  'HDFCBANK': '1333',
  'NIFTY 50': '99926000',
};

const StockSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeStockSymbol, setActiveStockSymbol] = useState('');
  const [livePrice, setLivePrice] = useState(0);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // For a loading indicator

  // This function now calls our new backend endpoint
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm) return;

    setIsLoading(true);
    setError('');
    setLivePrice(0);
    const uppercaseTerm = searchTerm.toUpperCase();
    setActiveStockSymbol(uppercaseTerm);

    // Check if we know this stock
    if (!instrumentLookup[uppercaseTerm]) {
      setError("Stock not found. Try RELIANCE, SBIN, etc.");
      setIsLoading(false);
      return;
    }

    try {
      // Call our NEW backend function, passing the symbol in the URL
      const response = await fetch(`/api/get-ltp?symbol=${uppercaseTerm}`);
      
      if (!response.ok) {
        throw new Error('The server failed to get the price.');
      }
      
      const data = await response.json();
      setLivePrice(data.ltp);

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false); // Stop loading, whether it succeeded or failed
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-800 text-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Stock Price Checker</h1>
      
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter stock symbol (e.g., RELIANCE)"
          className="w-full px-4 py-2 text-black bg-gray-200 rounded-md"
        />
        <button type="submit" disabled={isLoading} className="w-full mt-3 px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 font-semibold disabled:bg-gray-500">
          {isLoading ? 'Fetching...' : 'Get Last Price'}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-lg text-gray-400">{activeStockSymbol || "Search for a stock"}</p>
        {livePrice > 0 ? (
          <p className="text-5xl font-semibold text-green-400 mt-2">₹{livePrice.toFixed(2)}</p>
        ) : (
          <p className="text-gray-500">{activeStockSymbol && !error ? "..." : "---"}</p>
        )}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default StockSearch;