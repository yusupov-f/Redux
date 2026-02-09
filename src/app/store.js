import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../features/ui/uiSlice';
import thingsReducer from '../features/things/thingsSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    things: thingsReducer,
  },
});