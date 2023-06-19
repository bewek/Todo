import {configureStore} from '@reduxjs/toolkit';
import * as reducers from './Slice';

export const store = configureStore({
  reducer: reducers,
});
