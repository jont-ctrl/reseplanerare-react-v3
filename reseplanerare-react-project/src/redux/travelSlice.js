import { createSlice } from '@reduxjs/toolkit';


// Funktion för att hämta aktiviteter från localStorage
const loadActivitiesFromLocalStorage = () => {
  const savedActivities = localStorage.getItem('activities');
  return savedActivities ? JSON.parse(savedActivities) : [];
};


export const travelSlice = createSlice({
  name: 'travel',
  initialState: {
    activities: loadActivitiesFromLocalStorage(),
  },
  reducers: {
    addActivity: (state, action) => {
      state.activities.push(action.payload);
      localStorage.setItem('activities', JSON.stringify(state.activities));
    },
    removeActivity: (state, action) => {
      state.activities = state.activities.filter(item => item.id !== action.payload);
      localStorage.setItem('activities', JSON.stringify(state.activities));
    },
    updateActivity: (state, action) => {
      const { id, updatedActivity } = action.payload;
      const index = state.activities.findIndex(item => item.id === id);
      if (index !== -1) {
        state.activities[index] = { ...state.activities[index], ...updatedActivity };
        localStorage.setItem('activities', JSON.stringify(state.activities));
      }
    },
  },
});

// Exportera actions
export const { addActivity, removeActivity, updateActivity } = travelSlice.actions;

// Exportera reducer
export default travelSlice.reducer;
