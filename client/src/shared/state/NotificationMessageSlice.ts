import { createSlice } from "@reduxjs/toolkit";

export const NotificationMessageSlice = createSlice({
  name: "success",
  initialState: {
    success: null, /// change back to null
    error: null,
  },
  reducers: {
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setSuccess, setError } = NotificationMessageSlice.actions; // Export the correct action
export default NotificationMessageSlice.reducer;
