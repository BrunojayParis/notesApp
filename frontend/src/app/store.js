import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postslice'

export default configureStore({
  reducer: {
    posts:postsReducer
  },
})