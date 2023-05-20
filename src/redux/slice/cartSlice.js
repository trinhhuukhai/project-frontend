import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        carts:{
            allCart:null,
            isFetching:false,
            error:false,
            postCart:null,
            deleteCart:false,
            editQuantity:null,
            postOrderItem:null,
        },
    },
    reducers:{
        postCartStart: (state) =>{
            state.carts.isFetching = true
        },
        postCartSuccess: (state, action) =>{
            state.carts.isFetching = false
            state.carts.postCart = action.payload
        },
        postCartFailed: (state) =>{
            state.carts.isFetching = false
            state.carts.error = true
        },
        postOrderItemStart: (state) =>{
            state.carts.isFetching = true
        },
        postOrderItemSuccess: (state, action) =>{
            state.carts.isFetching = false
            state.carts.postOrderItem = action.payload
        },
        postOrderItemFailed: (state) =>{
            state.carts.isFetching = false
            state.carts.error = true
        },
        
        getCartStart:(state) =>{
            state.carts.isFetching = true
        },
        getCartSuccess:(state, action) =>{
            state.carts.isFetching = false
            state.carts.allCart = action.payload
        },
        getCartFailed: (state) =>{
            state.carts.isFetching = false
            state.carts.error = true
        },
        deleteCartStart: (state) =>{
            state.carts.isFetching = true
        },
        deleteCartSuccess: (state, action) =>{
            state.carts.isFetching = false
            state.carts.deleteCart = action.payload
        },
        deleteCartFailed: (state) =>{
            state.carts.isFetching = false
            state.carts.error = true
        },
        editCartStart: (state) =>{
            state.carts.isFetching = true
        },
        editCartSuccess: (state, action) =>{
            state.carts.isFetching = false
            state.carts.editQuantity = action.payload
        },
        editCartFailed: (state) =>{
            state.carts.isFetching = false
            state.carts.error = true
        },
    }
})

export const{
    postCartStart,
    postCartSuccess,
    postCartFailed,
    getCartStart,
    getCartSuccess,
    getCartFailed,
    deleteCartStart,
    deleteCartSuccess,
    deleteCartFailed,
    editCartStart,
    editCartSuccess,
    editCartFailed,
    postOrderItemStart,
    postOrderItemSuccess,
    postOrderItemFailed
} = cartSlice.actions;

export default cartSlice.reducer