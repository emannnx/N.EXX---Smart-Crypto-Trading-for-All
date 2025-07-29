import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// List of 20 coin IDs and their symbols for CoinGecko API
const coins = [
	{ id: "bitcoin", symbol: "BTC" },
	{ id: "ethereum", symbol: "ETH" },
	{ id: "solana", symbol: "SOL" },
	{ id: "cardano", symbol: "ADA" },
	{ id: "dogecoin", symbol: "DOGE" },
	{ id: "tron", symbol: "TRX" },
	{ id: "ripple", symbol: "XRP" },
	{ id: "polkadot", symbol: "DOT" },
	{ id: "polygon", symbol: "MATIC" },
	{ id: "litecoin", symbol: "LTC" },
	{ id: "stellar", symbol: "XLM" },
	{ id: "avalanche", symbol: "AVAX" },
	{ id: "uniswap", symbol: "UNI" },
	{ id: "chainlink", symbol: "LINK" },
	{ id: "vechain", symbol: "VET" },
	{ id: "monero", symbol: "XMR" },
	{ id: "tezos", symbol: "XTZ" },
	{ id: "filecoin", symbol: "FIL" },
	{ id: "algorand", symbol: "ALGO" },
	{ id: "aptos", symbol: "APT" },
];

const fetchCryptoData = async () => {
	try {
		const ids = coins.map((c) => c.id).join(",");
		const res = await fetch(
			`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`
		);
		const data = await res.json();
		return coins.map((coin) => ({
			symbol: coin.symbol,
			price: data[coin.id]
				? `$${Number(data[coin.id].usd).toLocaleString()}`
				: "N/A",
		}));
	} catch {
		// fallback to static data if fetch fails
		return coins.map((coin) => ({
			symbol: coin.symbol,
			price: "N/A",
		}));
	}
};

const CryptoTicker = () => {
	const [cryptoData, setCryptoData] = useState<any[]>([]);

	useEffect(() => {
		let isMounted = true;
		const updateData = async () => {
			const data = await fetchCryptoData();
			if (isMounted) setCryptoData(data);
		};
		updateData();
		const interval = setInterval(updateData, 5000);
		return () => {
			isMounted = false;
			clearInterval(interval);
		};
	}, []);

	return (
		<div className="w-full overflow-hidden bg-card border-y border-border py-3">
			<motion.div
				className="flex whitespace-nowrap"
				animate={{ x: [1000, -1000] }}
				transition={{
					duration: 30,
					repeat: Infinity,
					ease: "linear",
				}}
			>
				{[...cryptoData, ...cryptoData].map((crypto, index) => (
					<div
						key={`${crypto.symbol}-${index}`}
						className="flex items-center mx-8"
					>
						<span className="text-primary font-semibold mr-2">
							{crypto.symbol}
						</span>
						<span className="text-foreground mr-2">{crypto.price}</span>
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default CryptoTicker;