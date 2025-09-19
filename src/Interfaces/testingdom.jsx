import React from 'react';

// This is the main component for your dashboard page.
// We will put all the HTML-like code (called JSX in React) inside this function.
function App() {
  return (
    // This is the main box for the whole page.
    // 'bg-gray-100' gives it a light gray background.
    // 'min-h-screen' makes sure it fills the whole screen height.
    // 'font-sans' sets a clean, simple font.
    <div className="bg-gray-100 min-h-screen font-sans">

      {/* Header Section */}
      {/* 'bg-white' is a white background. 'shadow-sm' adds a small shadow. */}
      {/* 'p-4' adds padding around the content inside. */}
      {/* 'flex' and 'items-center' are used to line up items horizontally. */}
      <div className="bg-white shadow-sm p-4 flex items-center">
        {/* 'flex' and 'items-center' again for the left side items */}
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-gray-800">Trakvest</h1>
          {/* Navigation Links */}
          {/* 'ml-8' adds margin to the left to create space. */}
          <nav className="ml-8">
            <a href="#" className="text-gray-600 mr-6">Dashboard</a>
            <a href="#" className="text-gray-600 mr-6">Portfolio</a>
            <a href="#" className="text-gray-600">Reports</a>
          </nav>
        </div>

        {/* This div will be pushed to the right side */}
        {/* 'ml-auto' is a trick that adds margin to the left automatically, pushing this to the far right. */}
        <div className="ml-auto flex items-center">
          <span className="text-gray-600 mr-4">Welcome, ujas</span>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
            Logout
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {/* 'p-8' adds padding to create space from the edges. */}
      <main className="p-8">

        {/* Welcome Title */}
        {/* 'mb-8' adds margin to the bottom. */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Welcome back, ujas!</h2>
          <p className="text-gray-500">Here's your financial overview</p>
        </div>

        {/* Stat Cards Section */}
        {/* We use 'flex' to put the cards in a row. 'mb-8' for bottom margin. */}
        <div className="flex mb-8">
          {/* Card 1: Bank Balance */}
          {/* 'bg-white' for white background, 'p-6' for padding, 'rounded-lg' for rounded corners. */}
          {/* 'flex' and 'items-center' to align the icon and text. */}
          {/* 'w-1/3' makes the card take up one-third of the width. 'mr-6' adds space to the right. */}
          <div className="bg-white p-6 rounded-lg shadow-sm flex items-center w-1/3 mr-6">
             <div className="p-2 bg-gray-200 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M12 6h.01M12 21a9 9 0 110-18 9 9 0 010 18z" />
                </svg>
             </div>
            <div>
              <p className="text-gray-500">Bank Balance</p>
              <p className="text-2xl font-bold text-gray-800">$0</p>
            </div>
          </div>

          {/* Card 2: Stock Portfolio */}
          <div className="bg-white p-6 rounded-lg shadow-sm flex items-center w-1/3 mr-6">
            <div className="p-2 bg-gray-200 rounded-lg mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-500">Stock Portfolio</p>
              <p className="text-2xl font-bold text-gray-800">$0</p>
            </div>
          </div>

          {/* Card 3: Total Portfolio */}
          <div className="bg-white p-6 rounded-lg shadow-sm flex items-center w-1/3">
            <div className="p-2 bg-gray-200 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            </div>
            <div>
              <p className="text-gray-500">Total Portfolio</p>
              <p className="text-2xl font-bold text-gray-800">$0</p>
            </div>
          </div>
        </div>

        {/* Your Stocks and Financial Goals Section */}
        {/* We use 'flex' again to put the two boxes side-by-side. */}
        <div className="flex mb-8">
          {/* Box 1: Your Stocks */}
          {/* 'w-1/2' makes it take up half the width. 'mr-6' adds space between the boxes. */}
          <div className="bg-white p-6 rounded-lg shadow-sm w-1/2 mr-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Your Stocks</h3>
            <p className="text-gray-500 text-center py-8">No stocks in your portfolio yet.</p>
          </div>
          {/* Box 2: Financial Goals */}
          <div className="bg-white p-6 rounded-lg shadow-sm w-1/2">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Financial Goals</h3>
            <p className="text-gray-500 text-center py-8">No financial goals set yet.</p>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
            {/* 'flex' to line up the buttons */}
            <div className="flex">
                <button className="bg-white p-4 rounded-lg shadow-sm w-1/3 mr-6 text-center font-semibold text-gray-700">
                    + Add Transaction
                </button>
                 <button className="bg-white p-4 rounded-lg shadow-sm w-1/3 mr-6 text-center font-semibold text-gray-700">
                    📊 Buy Stocks
                </button>
                 <button className="bg-white p-4 rounded-lg shadow-sm w-1/3 text-center font-semibold text-gray-700">
                    ⚡️ Set New Goal
                </button>
            </div>
        </div>

        {/* Recent Transactions Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Transactions</h3>
          <p className="text-gray-500 text-center py-12">No transactions yet.</p>
        </div>

      </main>
    </div>
  );
}

export default App;
