import { createSlice } from '@reduxjs/toolkit';

export const travelSlice = createSlice({
  name: 'travel',
  initialState: {
    activities: [],
  },
  reducers: {
    addActivity: (state, action) => {
      state.activities.push(action.payload);
    },
    removeActivity: (state, action) => {
      state.activities = state.activities.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

// Exportera actions
export const { addActivity, removeActivity } = travelSlice.actions;

// Exportera reducer
export default travelSlice.reducer;
