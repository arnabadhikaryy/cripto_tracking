import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  criptoPrice: [
    {
      id: 1,
      logo: 'https://media.istockphoto.com/id/874752694/vector/bitcoin-crypto-currency-blockchain-flat-logo-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=QOFCglFVLvchovxNZf8LU8W4a8gfMymonhO2CYvZJXQ=',
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 93759.48,
      change1h: 0.43,
      change24h: 0.93,
      change7d: 11.11,
      marketCap: 1861618902186,
      volume24h: 43874950947,
      supply: '19.85M',
      chart: [2, 4, 1, 4, 2, 3, 7],
    },
    {
      id: 2,
      logo: 'data:image/png;base64,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',
      name: 'Ethereum',
      symbol: 'ETH',
      price: 93759.48,
      change1h: 0.43,
      change24h: 0.93,
      change7d: 11.11,
      marketCap: 1861618902186,
      volume24h: 43874950947,
      supply: '120.71M',
      chart: [2, 4, 1, 4, 2, 3, 7],
    },
    {
        id: 3,
      logo: 'data:image/png;base64,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',
      name: 'Tether',
      symbol: 'USDT',
      price: 93759.48,
      change1h: 0.43,
      change24h: 0.93,
      change7d: 11.11,
      marketCap: 1861618902186,
      volume24h: 43874950947,
      supply: '145.27B',
      chart: [2, 4, 1, 4, 2, 3, 7],
    },
    {
        id: 4,
      logo: 'https://static-00.iconduck.com/assets.00/xrp-cryptocurrency-icon-2048x2048-2a0bicgj.png',
      name: 'XRP',
      symbol: 'XRP',
      price: 93759.48,
      change1h: 0.43,
      change24h: 0.93,
      change7d: 11.11,
      marketCap: 1861618902186,
      volume24h: 43874950947,
      supply: '42.65B',
      chart: [2, 4, 1, 4, 2, 3, 7],
    },
    {
        id: 5,
      logo: 'https://png.pngtree.com/png-clipart/20230820/original/pngtree-binance-coin-bnb-token-symbol-cryptocurrency-logo-picture-image_8080541.png',
      name: 'BNB',
      symbol: 'BNB',
      price: 93759.48,
      change1h: 0.43,
      change24h: 0.93,
      change7d: 11.11,
      marketCap: 1861618902186,
      volume24h: 43874950947,
      supply: '240.75M',
      chart: [2, 4, 1, 4, 2, 3, 7],
    },
    {
        id: 6,
      logo: 'data:image/jpeg;base64,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',
      name: 'Solana',
      symbol: 'SOL',
      price: 93759.48,
      change1h: 0.43,
      change24h: 0.93,
      change7d: 11.11,
      marketCap: 1861618902186,
      volume24h: 43874950947,
      supply: '517.31M',
      chart: [2, 4, 1, 4, 2, 3, 7],
    }
  ],
};

const criptoSlice = createSlice({
  name: "cripto",
  initialState,
  reducers: {
    update_price: (state, action) => {
      const updated = action.payload;
      const index = state.criptoPrice.findIndex(c => c.name === updated.name);
      if (index !== -1) {
        state.criptoPrice[index] = { ...state.criptoPrice[index], ...updated };
      }
    },
  },
});

export const { update_price } = criptoSlice.actions;
export default criptoSlice.reducer;
