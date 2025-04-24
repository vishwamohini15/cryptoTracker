import React from 'react';
import { useSelector } from 'react-redux';
import './CryptoTable.css';

const CryptoTable = () => {
  const assets = useSelector((state) => state.crypto.assets);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>Circulating Supply</th>
            <th>Max Supply</th>
            <th>7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, i) => (
            <tr key={asset.id}>
              <td>{i + 1}</td>
              <td><img src={asset.logo} alt={asset.symbol} width="30" /></td>
              <td>{asset.name}</td>
              <td>{asset.symbol}</td>
              <td>${asset.price.toFixed(2)}</td>
              <td className={asset.change1h >= 0 ? 'green' : 'red'}>{asset.change1h}%</td>
              <td className={asset.change24h >= 0 ? 'green' : 'red'}>{asset.change24h}%</td>
              <td className={asset.change7d >= 0 ? 'green' : 'red'}>{asset.change7d}%</td>
              <td>${asset.marketCap.toLocaleString()}</td>
              <td>${asset.volume24h.toLocaleString()}</td>
              <td>{asset.circulatingSupply}</td>
              <td>{asset.maxSupply}</td>
              <td><img src={asset.chart} alt="chart" width="50" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
