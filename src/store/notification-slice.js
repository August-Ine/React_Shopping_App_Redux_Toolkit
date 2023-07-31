import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: { status: null, title: null, message: null },
  reducers: {
    showNotification(state, action) {
      state.status = action.payload.status;
      state.title = action.payload.title;
      state.message = action.payload.message;
    }
  }
});

export const notificationActions = notificationSlice.actions;
export default notificationSlice.reducer;
