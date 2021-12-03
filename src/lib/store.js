
import { configureStore } from '@reduxjs/toolkit';

import TasksSlice from "./slices/TaskSlicer";
import AppStateSlice from './slices/AppStateSlicer';
/*
 * Our app's store configuration goes here.
 * Read more about Redux's configureStore in the docs:
 * https://redux-toolkit.js.org/api/configureStore
 */
const store = configureStore({
  reducer: {
    tasks: TasksSlice.reducer,
    isError:AppStateSlice.reducer
  },
});

export default store;