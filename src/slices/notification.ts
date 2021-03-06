import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from 'src/store';
import { Notification } from 'src/types/notification';
import axios from 'src/utils/axios';

interface NotificationsState {
  notifications: Notification[];
}

const initialState: NotificationsState = {
  notifications: []
};

const slice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    getNotifications(
      state: NotificationsState,
      action: PayloadAction<{ notifications: Notification[] }>
    ) {
      const { notifications } = action.payload;

      state.notifications = notifications;
    }
  }
});

export const reducer = slice.reducer;

export const getNotifications = (): AppThunk => async dispatch => {
  const response = await axios.get<{ notifications: Notification[] }>(
    '/api/notifications'
  );

  dispatch(slice.actions.getNotifications(response.data));
};

export default slice;
