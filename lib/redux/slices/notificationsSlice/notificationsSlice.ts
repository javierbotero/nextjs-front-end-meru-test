/* Core */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: NotificationsSliceState = {
  error: '',
  message: ''
};

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    notificationError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    notificationMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    cleanError: (state) => { state.error = '' },
    cleanMessage: (state) => { state.message = '' }
  }
});

export const {
  notificationError,
  notificationMessage,
  cleanError,
  cleanMessage
} = notificationsSlice.actions

/* Types */
export interface NotificationsSliceState {
  error: string;
  message: string;
}
