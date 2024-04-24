import { createSlice } from "@reduxjs/toolkit";

export const postcodeSlice = createSlice({
  name: "postcode",
  initialState: {
    postcode: "E4 9NF", /// change back to null
  },
  reducers: {
    setPostcode: (state, action) => {
      state.postcode = action.payload;
    },
  },
});

export const { setPostcode } = postcodeSlice.actions; // Export the correct action
export default postcodeSlice.reducer;
