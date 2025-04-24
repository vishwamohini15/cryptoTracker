import React from 'react';
import { useSelector } from 'react-redux';
import './CryptoTable.css';

const CryptoTable = () => {
  const assets = useSelector((state) => state.crypto.assets);

  return (
    <div className="table-container responsive-table">
      <table >
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
      <td data-label="#"> {i + 1}</td>
      <td data-label="Logo">{asset.symbol} </td>
      <td data-label="Name">{asset.name}</td>
      <td data-label="Symbol">{asset.symbol}</td>
      <td data-label="Price">${asset.price.toFixed(2)}</td>
      <td data-label="1h %" className={asset.change1h >= 0 ? 'green' : 'red'}>{asset.change1h}%</td>
      <td data-label="24h %" className={asset.change24h >= 0 ? 'green' : 'red'}>{asset.change24h}%</td>
      <td data-label="7d %" className={asset.change7d >= 0 ? 'green' : 'red'}>{asset.change7d}%</td>
      <td data-label="Market Cap">${asset.marketCap.toLocaleString()}</td>
      <td data-label="24h Volume">${asset.volume24h.toLocaleString()}</td>
      <td data-label="Circulating Supply">{asset.circulatingSupply}</td>
      <td data-label="Max Supply">{asset.maxSupply}</td>
      <td data-label="7D Chart"><img src={asset.chart} alt="chart" width="50" /></td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
};

export default CryptoTable;