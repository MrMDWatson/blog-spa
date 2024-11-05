import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [{title: "Hello", desc: "Helping", id: 4568}, {title: "Hello", desc: "Helping", id: 8712}],
  number: 2
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    createPost: (state, action) => {
      state.number += 1;
      action.payload.id = state.number;
      state.posts.unshift(action.payload);
    }
  }
});

export const { createPost } = postsSlice.actions;

export default postsSlice.reducer;