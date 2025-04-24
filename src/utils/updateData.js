function getRandomFloat(min, max) {
     return parseFloat((Math.random() * (max - min) + min).toFixed(2));
   }
   
   function updateCryptoData(data) {
     return data.map(asset => {
       const priceChange = getRandomFloat(-1, 1);
       const volumeChange = getRandomFloat(-5000000, 5000000);
   
       return {
         ...asset,
         price: +(asset.price + priceChange).toFixed(2),
         change1h: +(getRandomFloat(-1, 1)).toFixed(2),
         change24h: +(getRandomFloat(-5, 5)).toFixed(2),
         change7d: +(getRandomFloat(-10, 10)).toFixed(2),
         volume24h: asset.volume24h + volumeChange,
       };
     });
   }
   
   export default updateCryptoData;
   