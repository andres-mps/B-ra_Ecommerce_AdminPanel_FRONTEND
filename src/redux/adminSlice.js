import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {},
  reducers: {
    setToken(state, action) {
      return action.payload;
    },
    logOut(state, action) {
      return (state = {});
    },
    updateData(state, action) {
      state.userData = { ...state.userData, ...action.payload };
    },
  },
});

const { actions, reducer } = adminSlice;
export const { setToken, logOut, updateData } = actions;
export default reducer;
