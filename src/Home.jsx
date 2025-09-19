import { useState } from "react";

export default function Home() {
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState(null);
  const [error, setError] = useState("");

  const fetchPrice = async () => {
    setError("");
    setPrice(null);
    try {
      const res = await fetch(`/api/getPrice?stock=${stock}`);
      const data = await res.json();
      if (data.price) {
        setPrice(data.price);
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      setError("Failed to fetch price");
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>📈 Stock Price Checker</h1>
      <input
        type="text"
        placeholder="Enter stock name (e.g. RELIANCE)"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        style={{ padding: "0.5rem", marginRight: "1rem" }}
      />
      <button onClick={fetchPrice} style={{ padding: "0.5rem 1rem" }}>
        Get Price
      </button>
      {price && <h2>Last Price: ₹{price}</h2>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}