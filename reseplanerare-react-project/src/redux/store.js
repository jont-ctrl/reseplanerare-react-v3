import { configureStore } from '@reduxjs/toolkit';
import travelReducer from './travelSlice';

export const store = configureStore({
  reducer: {
    travel: travelReducer,
  },
});
