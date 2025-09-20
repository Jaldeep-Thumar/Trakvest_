// This is a Node.js backend function, not React.
// We'll use 'axios' to make API calls. You might need to install it.
// In your terminal: npm install axios
import axios from 'axios';
import totp from 'totp-generator'; // Install this: npm install totp-generator

export default async function handler(req, res) {
  // Get secrets from environment variables
  const apiKey = process.env.VITE_ANGEL_API_KEY;
  const clientId = process.env.VITE_ANGEL_CLIENT_ID;
  const pin = process.env.ANGEL_PIN;
  const secretKey = process.env.ANGEL_SECRET_KEY;
  const totpKey = process.env.ANGEL_TOTP; // Your TOTP secret from Angel One

  // Generate the current Time-based One-Time Password (TOTP)
  const currentTotp = totp(totpKey);

  try {
    // === Step 1: Get the accessToken ===
    const loginResponse = await axios.post(
      'https://apiconnect.angelbroking.com/rest/auth/angelbroking/user/v1/loginByPassword',
      {
        clientcode: clientId,
        password: pin,
        totp: currentTotp,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-UserType': 'USER',
          'X-SourceID': 'WEB',
          'X-ClientLocalIP': '192.168.1.1', // Can be a dummy IP
          'X-ClientPublicIP': '103.1.1.1', // Can be a dummy IP
          'X-MACAddress': '00:00:00:00:00:00', // Can be a dummy MAC
          'X-PrivateKey': apiKey,
        },
      }
    );

    const accessToken = loginResponse.data.data.jwtToken;
    const refreshToken = loginResponse.data.data.refreshToken;

    // === Step 2: Get the feedToken using the accessToken ===
    const sessionResponse = await axios.post(
      'https://apiconnect.angelbroking.com/rest/auth/angelbroking/session/v1/generateSession',
      {
        clientcode: clientId,
        refreshToken: refreshToken,
      },
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-UserType': 'USER',
          'X-SourceID': 'WEB',
          'X-ClientLocalIP': '192.168.1.1',
          'X-ClientPublicIP': '103.1.1.1',
          'X-MACAddress': '00:00:00:00:00:00',
          'X-PrivateKey': apiKey,
        },
      }
    );

    const feedToken = sessionResponse.data.data.feedToken;

    // === Step 3: Send the necessary tokens back to your React app ===
    res.status(200).json({
      accessToken: accessToken, // We might need this later
      feedToken: feedToken,
    });

  } catch (error) {
    // Send back a detailed error message
    console.error(error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Failed to authenticate with Angel One.' });
  }
}