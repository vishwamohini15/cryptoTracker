import './App.css'
import React, { useEffect } from 'react';
import CryptoTable from './components/CryptoTable';
import updateCryptoData from './utils/updateData';
import { useDispatch, useSelector } from 'react-redux';
import { updateCrypto } from './features/crypto/cryptoSlice';

function App() {
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.crypto.assets);

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedData = updateCryptoData(assets);
      dispatch(updateCrypto(updatedData));
    }, 1500); // update every 1.5 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [assets, dispatch]);

  return (
    <div className='App'>
      <h1 style={{ textAlign: 'center' }}>💎 Crypto Tracker</h1>
      <CryptoTable />
    </div>
  );
}

export default App;