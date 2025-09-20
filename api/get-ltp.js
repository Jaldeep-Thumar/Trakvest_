import axios from 'axios';
import totp from 'totp-generator';

// We keep the instrument lookup "phonebook" here on the backend for security and consistency
const instrumentLookup = {
  'RELIANCE': { token: '2885', symbol: 'RELIANCE-EQ', exchange: 'NSE' },
  'SBIN':     { token: '3045', symbol: 'SBIN-EQ', exchange: 'NSE' },
  'INFY':     { token: '1594', symbol: 'INFY-EQ', exchange: 'NSE' },
  'TCS':      { token: '2963', symbol: 'TCS-EQ', exchange: 'NSE' },
  'HDFCBANK': { token: '1333', symbol: 'HDFCBANK-EQ', exchange: 'NSE' },
  'NIFTY 50': { token: '99926000', symbol: 'Nifty 50', exchange: 'NFO' }, // Example for index
};

export default async function handler(req, res) {
  // Get the stock symbol from the URL query, e.g., /api/get-ltp?symbol=RELIANCE
  const symbol = req.query.symbol;
  const stockInfo = instrumentLookup[symbol];

  if (!stockInfo) {
    return res.status(404).json({ error: 'Stock not found in lookup.' });
  }

  // Get secrets from environment variables
  const apiKey = process.env.VITE_ANGEL_API_KEY;
  const clientId = process.env.VITE_ANGEL_CLIENT_ID;
  const pin = process.env.ANGEL_PIN;
  const totpKey = process.env.ANGEL_TOTP;

  try {
    // === Step 1: Authenticate and get accessToken (same as before) ===
    const currentTotp = totp(totpKey);
    const loginResponse = await axios.post(
      'https://apiconnect.angelbroking.com/rest/auth/angelbroking/user/v1/loginByPassword',
      { clientcode: clientId, password: pin, totp: currentTotp },
      { headers: { /* ... your headers ... */ 'X-PrivateKey': apiKey } }
    );
    const accessToken = loginResponse.data.data.jwtToken;

    // === Step 2: Ask Angel One for the Last Traded Price (LTP) ===
    const ltpResponse = await axios.post(
      'https://apiconnect.angelbroking.com/rest/secure/angelbroking/market/v1/getLtpData',
      {
        exchange: stockInfo.exchange,
        tradingsymbol: stockInfo.symbol,
        symboltoken: stockInfo.token,
      },
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-UserType': 'USER',
          'X-SourceID': 'WEB',
          'X-PrivateKey': apiKey,
        },
      }
    );

    const ltp = ltpResponse.data.data.ltp;

    // === Step 3: Send the price back to your React app ===
    res.status(200).json({ ltp: ltp });

  } catch (error) {
    console.error("API Error:", error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Failed to fetch LTP from Angel One.' });
  }
}