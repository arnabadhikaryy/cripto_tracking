import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { update_price } from "../featurs/update_price_slice";
import sample_data from "../middleware/sample_data";
import LineGraph from 'react-line-graph'
import { useEffect } from "react";

function Homepage() {
  const dispatch = useDispatch();
  const cryptoList = useSelector((state) => state.cripto.criptoPrice);
  let number

  console.log(cryptoList)

  const dispatching = () => {
    const number = Math.floor(Math.random() * sample_data.length); 
    const updatedData = sample_data[number];
    
    dispatch(update_price(updatedData));
    
    setTimeout(dispatching, 3000);
  };
  
  useEffect(() => {
    const timer = setTimeout(dispatching, 3000);
    return () => clearTimeout(timer); 
  }, []);

  return ( 
    <div className="p-4">
    {/* Table for md+ screens */}
    <div className="hidden md:block overflow-x-auto">
      <table className="w-full text-sm text-left border-collapse">
        <thead className="text-xs uppercase bg-gray-100 text-gray-700">
          <tr>
            <th className="px-4 py-3">#</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">1h %</th>
            <th className="px-4 py-3">24h %</th>
            <th className="px-4 py-3">7d %</th>
            <th className="px-4 py-3">Market Cap</th>
            <th className="px-4 py-3">Volume (24h)</th>
            <th className="px-4 py-3">Circulating Supply</th>
            <th className="px-4 py-3">Last 7 Days</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {cryptoList.map((coin, index) => (
            <tr key={coin.id} className="hover:bg-gray-50">
              <td className="px-4 py-3">{index + 1}</td>
              <td className="px-4 py-3 flex items-center gap-2">
                <img src={coin.logo} alt={coin.symbol} className="w-6 h-6" />
                <div>
                  <span className="font-medium">{coin.name}</span>
                  <span className="text-gray-500 text-xs ml-1">{coin.symbol}</span>
                </div>
              </td>
              <td className="px-4 py-3">${coin.price.toLocaleString()}</td>

              <td className={`px-4 py-3 ${coin.change1h < 2.5 ? "text-red-600" : "text-green-600"}`}>
                {coin.change1h < 2.5 ? "▼" : "▲"} {coin.change1h}%
              </td>
              <td className={`px-4 py-3 ${coin.change24h < 2.5 ? "text-red-600" : "text-green-600"}`}>
                {coin.change24h < 2.5 ? "▼" : "▲"} {coin.change24h}%
              </td>
              <td className={`px-4 py-3 ${coin.change7d < 2.5 ? "text-red-600" : "text-green-600"}`}>
                {coin.change7d < 2.5 ? "▼" : "▲"} {coin.change7d}%
              </td>

              <td className="px-4 py-3">${coin.marketCap.toLocaleString()}</td>
              <td className="px-4 py-3">${coin.volume24h.toLocaleString()}</td>
              <td className="px-4 py-3">{coin.supply}</td>
              <td className="px-4 py-3">
                <svg className="h-10 w-24" viewBox="0 0 100 40">
                  <polyline
                    fill="none"
                    stroke="#16a34a"
                    strokeWidth="2"
                    points={coin.chart.map((val, i) => `${i * 15},${40 - val * 4}`).join(" ")}
                  />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Card format for small screens */}
    <div className="md:hidden space-y-4">
      {cryptoList.map((coin, index) => (
        <div
          key={coin.id}
          className="bg-white shadow rounded-xl p-4 flex flex-col gap-2"
        >
          <div className="flex items-center gap-3">
            <img src={coin.logo} alt={coin.symbol} className="w-8 h-8" />
            <div>
              <h2 className="font-bold">{coin.name}</h2>
              <p className="text-sm text-gray-500">{coin.symbol}</p>
            </div>
          </div>

          <div className="text-sm">
            <p>
              <span className="font-medium">Price:</span> ${coin.price.toLocaleString()}
            </p>
            <p className={coin.change1h < 2.5 ? "text-red-600" : "text-green-600"}>
              {coin.change1h < 2.5 ? "▼" : "▲"} 1h: {coin.change1h}%
            </p>
            <p className={coin.change24h < 2.5 ? "text-red-600" : "text-green-600"}>
              {coin.change24h < 2.5 ? "▼" : "▲"} 24h: {coin.change24h}%
            </p>
            <p className={coin.change7d < 2.5 ? "text-red-600" : "text-green-600"}>
              {coin.change7d < 2.5 ? "▼" : "▲"} 7d: {coin.change7d}%
            </p>
            <p>
              <span className="font-medium">Market Cap:</span> ${coin.marketCap.toLocaleString()}
            </p>
            <p>
              <span className="font-medium">Volume (24h):</span> ${coin.volume24h.toLocaleString()}
            </p>
            <p>
              <span className="font-medium">Supply:</span> {coin.supply}
            </p>
          </div>

          <div>
            <svg className="h-10 w-full" viewBox="0 0 100 40">
              <polyline
                fill="none"
                stroke="#16a34a"
                strokeWidth="2"
                points={coin.chart.map((val, i) => `${i * 15},${40 - val * 4}`).join(" ")}
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Homepage;
