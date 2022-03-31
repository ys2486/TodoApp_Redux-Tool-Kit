import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../features/login/loginSlice';
import taskSlice from '../features/task/taskSlice';

export const store = configureStore({
  reducer: {
    login: loginSlice,
    task: taskSlice,
  },
});
