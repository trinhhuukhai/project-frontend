import { createSlice } from "@reduxjs/toolkit"

const reviewSlice = createSlice({
    name: "review",
    initialState: {
        allReview: null,
        isFetching: false,
        error: false,
        postReview: false,
        editReview: false,
        getIdReview: null,
        deleteReview: false
    },
    reducers: {
        getReviewStart: (state) => {
            state.isFetching = true
        },
        getReviewSuccess: (state, action) => {
            state.isFetching = false
            state.allReview = action.payload
        },
        getReviewFailed: (state) => {
            state.isFetching = false
            state.error = true
        },
        postReviewStart: (state) => {
            state.isFetching = true
        },
        postReviewSuccess: (state, action) => {
            state.isFetching = false
            state.postReview = action.payload
        },
        postReviewFailed: (state) => {
            state.isFetching = false
            state.error = true
        },
        editReviewStart: (state) => {
            state.isFetching = true
        },
        editReviewSuccess: (state, action) => {
            state.isFetching = false
            state.editReview = action.payload
        },
        editReviewFailed: (state) => {
            state.isFetching = false
            state.error = true
        },
        getIdReviewStart: (state) => {
            state.isFetching = true
        },
        getIdReviewSuccess: (state, action) => {
            state.isFetching = false
            state.getIdReview = action.payload
        },
        getIdReviewFailed: (state) => {
            state.isFetching = false
            state.error = true
        },

        deleteReviewStart: (state) => {
            state.isFetching = true
        },
        deleteReviewSuccess: (state, action) => {
            state.isFetching = false
            state.deleteReview = action.payload
        },
        deleteReviewFailed: (state) => {
            state.isFetching = false
            state.error = true
        },

    }
})

export const {
    getReviewStart,
    getReviewSuccess,
    getReviewFailed,
    postReviewStart,
    postReviewSuccess,
    postReviewFailed,
    editReviewStart,
    editReviewSuccess,
    editReviewFailed,
    getIdReviewStart,
    getIdReviewSuccess,
    getIdReviewFailed,
    deleteReviewStart,
    deleteReviewSuccess,
    deleteReviewFailed
} = reviewSlice.actions;

export default reviewSlice.reducer