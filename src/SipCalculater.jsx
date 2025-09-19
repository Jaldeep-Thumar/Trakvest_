function SipCalculater({ scrollRef }) {
  let result = null;

  function calculateSIP() {
    const investment = document.getElementById("inv").value;
    const rate = document.getElementById("rate").value;
    const time = document.getElementById("time").value;

    const r = rate / 100 / 12;
    const n = time * 12;
    const sip = investment * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);

    result = Math.round(sip);
    document.getElementById("result").innerText = "Final Value: ₹" + result;
  }

  return (
    <div ref={scrollRef} className="relative flex items-center justify-center text-white">
      <img
        className="w-screen h-screen relative blur-xs"
        src="src/assets/gif8.gif"
        alt="this is background"
      />

      <div className="min-h-screen flex items-center justify-center absolute bg-gray-950/85 w-screen">
        <div className="bg-gray-500/40 p-6 rounded-xl shadow-md w-10/20">
          <h1 className="text-xl font-bold mb-4 text-center">SIP Calculator</h1>

          <input
            id="inv"
            type="number"
            placeholder="Monthly Investment"
            className="w-full p-2 mb-3 border rounded transition-colors duration-300 ease-in-out hover:bg-gray-800/40"
          />
          <input
            id="rate"
            type="number"
            placeholder="Rate of Return (%)"
            className="w-full p-2 mb-3 border rounded transition-colors duration-300 ease-in-out hover:bg-gray-800/40"
          />
          <input
            id="time"
            type="number"
            placeholder="Time Period (Years)"
            className="w-full p-2 mb-3 border rounded  transition-colors duration-300 ease-in-out hover:bg-gray-800/40"
          />

          <button
            onClick={calculateSIP}
            className="w-full bg-cyan-900  text-white p-2 rounded  transition-colors duration-300 ease-in-out hover:bg-gray-800 border-b-2 border-r-2"
          >
            Calculate
          </button>

          <p id="result" className="mt-4 text-center font-semibold text-lg"></p>
        </div>
      </div>
    </div>
  );
}

export default SipCalculater;
