import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      // Merge the payload into the existing state
      return { ...state, ...action.payload };
    },
  },
});

export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer;
