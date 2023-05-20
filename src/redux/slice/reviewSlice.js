import {createSlice} from "@reduxjs/toolkit"

const reviewSlice = createSlice({
    name:"review",
    initialState:{
        reviews:{
            allReview:null,
            isFetching:false,
            error:false,
            postReview:false,
            editReview:false,
            getIdReview:null,
            deleteReview:false
        },
    },
    reducers:{
        getReviewStart:(state) =>{
            state.reviews.isFetching = true
        },
        getReviewSuccess:(state, action) =>{
            state.reviews.isFetching = false
            state.reviews.allReview = action.payload
        },
        getReviewFailed: (state) =>{
            state.reviews.isFetching = false
            state.reviews.error = true
        },
        postReviewStart: (state) =>{
            state.reviews.isFetching = true
        },
        postReviewSuccess: (state, action) =>{
            state.reviews.isFetching = false
            state.reviews.postReview = action.payload
        },
        postReviewFailed: (state) =>{
            state.reviews.isFetching = false
            state.reviews.error = true
        },
        editReviewStart: (state) =>{
            state.reviews.isFetching = true
        },
        editReviewSuccess: (state, action) =>{
            state.reviews.isFetching = false
            state.reviews.editReview = action.payload
        },
        editReviewFailed: (state) =>{
            state.reviews.isFetching = false
            state.reviews.error = true
        },
        getIdReviewStart: (state) =>{
            state.reviews.isFetching = true
        },
        getIdReviewSuccess: (state, action) =>{
            state.reviews.isFetching = false
            state.reviews.getIdReview = action.payload
        },
        getIdReviewFailed: (state) =>{
            state.reviews.isFetching = false
            state.reviews.error = true
        },

        deleteReviewStart: (state) =>{
            state.reviews.isFetching = true
        },
        deleteReviewSuccess: (state, action) =>{
            state.reviews.isFetching = false
            state.reviews.deleteReview = action.payload
        },
        deleteReviewFailed: (state) =>{
            state.reviews.isFetching = false
            state.reviews.error = true
        },

    }
})

export const{
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