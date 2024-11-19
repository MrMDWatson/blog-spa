import { configureStore } from '@reduxjs/toolkit';
import appReducer from "./appSplice";
import postsReducer from '../features/posts/postsSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    posts: postsReducer,
  },
});