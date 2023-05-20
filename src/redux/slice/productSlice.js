import {createSlice} from "@reduxjs/toolkit"

const productSLice = createSlice({
    name:"product",
    initialState:{
        products:{
            allProduct:null,
            isFetching:false,
            error:false,
            postProduct:false,
            editProduct:false,
            getIdProduct:null,
            deleteProduct:false
        },
    },
    reducers:{
        getProductStart:(state) =>{
            state.products.isFetching = true
        },
        getProductSuccess:(state, action) =>{
            state.products.isFetching = false
            state.products.allProduct = action.payload
        },
        getProductFailed: (state) =>{
            state.products.isFetching = false
            state.products.error = true
        },
        postProductStart: (state) =>{
            state.products.isFetching = true
        },
        postProductSuccess: (state, action) =>{
            state.products.isFetching = false
            state.products.postProduct = action.payload
        },
        postProductFailed: (state) =>{
            state.products.isFetching = false
            state.products.error = true
        },
        editProductStart: (state) =>{
            state.products.isFetching = true
        },
        editProductSuccess: (state, action) =>{
            state.products.isFetching = false
            state.products.editProduct = action.payload
        },
        editProductFailed: (state) =>{
            state.products.isFetching = false
            state.products.error = true
        },
        getIdProductStart: (state) =>{
            state.products.isFetching = true
        },
        getIdProductSuccess: (state, action) =>{
            state.products.isFetching = false
            state.products.getIdProduct = action.payload
        },
        getIdProductFailed: (state) =>{
            state.products.isFetching = false
            state.products.error = true
        },

        deleteProductStart: (state) =>{
            state.products.isFetching = true
        },
        deleteProductSuccess: (state, action) =>{
            state.products.isFetching = false
            state.products.deleteProduct = action.payload
        },
        deleteProductFailed: (state) =>{
            state.products.isFetching = false
            state.products.error = true
        },

    }
})

export const{
    getProductStart,
    getProductSuccess,
    getProductFailed,
    postProductStart,
    postProductSuccess,
    postProductFailed,
    editProductStart,
    editProductSuccess,
    editProductFailed,
    getIdProductStart,
    getIdProductSuccess,
    getIdProductFailed,
    deleteProductStart,
    deleteProductSuccess,
    deleteProductFailed
} = productSLice.actions;

export default productSLice.reducer