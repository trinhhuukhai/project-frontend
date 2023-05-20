import {createSlice} from "@reduxjs/toolkit"

const shippingSlice = createSlice({
    name:"shipping",
    initialState:{
        shippings:{
            allShipping:null,
            isFetching:false,
            error:false,
            postShipping:false,
            editShipping:false,
            getIdShipping:null,
            deleteShipping:false
        },
    },
    reducers:{
        getShippingStart:(state) =>{
            state.shippings.isFetching = true
        },
        getShippingSuccess:(state, action) =>{
            state.shippings.isFetching = false
            state.shippings.allShipping = action.payload
        },
        getShippingFailed: (state) =>{
            state.shippings.isFetching = false
            state.shippings.error = true
        },
        postShippingStart: (state) =>{
            state.shippings.isFetching = true
        },
        postShippingSuccess: (state, action) =>{
            state.shippings.isFetching = false
            state.shippings.postShipping = action.payload
        },
        postShippingFailed: (state) =>{
            state.shippings.isFetching = false
            state.shippings.error = true
        },
        editShippingStart: (state) =>{
            state.shippings.isFetching = true
        },
        editShippingSuccess: (state, action) =>{
            state.shippings.isFetching = false
            state.shippings.editShipping = action.payload
        },
        editShippingFailed: (state) =>{
            state.shippings.isFetching = false
            state.shippings.error = true
        },
        getIdShippingStart: (state) =>{
            state.shippings.isFetching = true
        },
        getIdShippingSuccess: (state, action) =>{
            state.shippings.isFetching = false
            state.shippings.getIdShipping = action.payload
        },
        getIdShippingFailed: (state) =>{
            state.shippings.isFetching = false
            state.shippings.error = true
        },

        deleteShippingStart: (state) =>{
            state.shippings.isFetching = true
        },
        deleteShippingSuccess: (state, action) =>{
            state.shippings.isFetching = false
            state.shippings.deleteShipping = action.payload
        },
        deleteShippingFailed: (state) =>{
            state.shippings.isFetching = false
            state.shippings.error = true
        },

    }
})

export const{
    getShippingStart,
    getShippingSuccess,
    getShippingFailed,
    postShippingStart,
    postShippingSuccess,
    postShippingFailed,
    editShippingStart,
    editShippingSuccess,
    editShippingFailed,
    getIdShippingStart,
    getIdShippingSuccess,
    getIdShippingFailed,
    deleteShippingStart,
    deleteShippingSuccess,
    deleteShippingFailed
} = shippingSlice.actions;

export default shippingSlice.reducer