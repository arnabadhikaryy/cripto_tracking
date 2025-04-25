import { configureStore } from '@reduxjs/toolkit';
import criptoReducer from '../featurs/update_price_slice';

const store = configureStore({
  reducer: {
    cripto: criptoReducer
  }
});

export default store;
