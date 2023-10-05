import { createSlice } from "@reduxjs/toolkit";

const buttonSlice = createSlice({
  name: "click",
  initialState: { isAllowed: false },
  reducers: {
    addbook(state) {
      state.isAllowed = !state.isAllowed;
    }
  }
});

export const buttonActions = buttonSlice.actions;

export default buttonSlice;