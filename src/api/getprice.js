import { SmartAPI } from "smartapi-javascript";
import { totp } from "otplib";

const stockMap = {
  RELIANCE: { symboltoken: "2885", tradingsymbol: "RELIANCE-EQ" },
  TCS: { symboltoken: "11536", tradingsymbol: "TCS-EQ" },
  INFY: { symboltoken: "1594", tradingsymbol: "INFY-EQ" },
  SBIN: { symboltoken: "3045", tradingsymbol: "SBIN-EQ" }
};

export default async function handler(req, res) {
  const { stock } = req.query;
  const stockInfo = stockMap[stock?.toUpperCase()];
  if (!stockInfo) return res.status(400).json({ error: "Stock not found" });

  const smartApi = new SmartAPI({ api_key: process.env.SMART_API_KEY });

  try {
    const session = await smartApi.generateSession(
      process.env.CLIENT_CODE,
      process.env.PIN,
      totp.generate(process.env.TOTP_SECRET)
    );

    const ltpData = await smartApi.getLTP({
      exchange: "NSE",
      tradingsymbol: stockInfo.tradingsymbol,
      symboltoken: stockInfo.symboltoken
    });

    res.status(200).json({ price: ltpData.data.ltp });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}