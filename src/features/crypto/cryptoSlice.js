import { createSlice } from '@reduxjs/toolkit';
import sampleData from '../../utils/sampleData';

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    assets: sampleData,
  },
  reducers: {
    updateCrypto: (state, action) => {
      state.assets = action.payload;
    },
  },
});

export const { updateCrypto } = cryptoSlice.actions;
export default cryptoSlice.reducer;
