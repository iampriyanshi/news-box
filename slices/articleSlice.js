// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes
import { createSlice } from "@reduxjs/toolkit";

export const articleSlice = createSlice({
  name: "article",
  initialState: {
    topHeadlines: [],
    searchText: "",
  },
  reducers: {
    updateTopHeadline: (state, action) => {
      if (action.payload) {
        state.topHeadlines = action.payload.topHeadlines;
      }
    },
    updateSearchText: (state, action) => {
      state.searchText = action.payload.searchText;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateTopHeadline,
  updateSearchText,
} = articleSlice.actions;

export default articleSlice.reducer;
