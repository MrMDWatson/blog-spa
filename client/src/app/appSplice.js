import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  socket: null
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const newState = {
        ...state,
        user: action.payload
      }
      return newState;
    },
    setSocket: (state, action) => {
      const newState = {
        ...state,
        socket: action.payload
      }
      return newState;
    }
  }
});

// console.log(appSlice);
export const { setUser, setSocket } = appSlice.actions;

export default appSlice.reducer;