import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers: {
        
        initPost: (state, action) => {
            return action.payload
        },

        addPost: (state, action) => {
            return [...state, action.payload]
        },

        deletePost: (state, action) => {
            const foundPost = state.find((post) => post.id === action.payload);
            if (foundPost) {
                state.splice(state.indexOf(foundPost), 1);
            }
        }

    }
})

export const { initPost, addPost, deletePost } = postSlice.actions
export default postSlice.reducer