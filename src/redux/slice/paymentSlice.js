import {createSlice} from "@reduxjs/toolkit"

const paymentSlice = createSlice({
    name:"payment",
    initialState:{
        payments:{
            allPayment:null,
            isFetching:false,
            error:false,
            postPayment:null,
        },
    },
    reducers:{
        getPaymentStart:(state) =>{
            state.payments.isFetching = true
        },
        getPaymentSuccess:(state, action) =>{
            state.payments.isFetching = false
            state.payments.allPayment = action.payload
        },
        getPaymentFailed: (state) =>{
            state.payments.isFetching = false
            state.payments.error = true
        },
        postPaymentStart: (state) =>{
            state.payments.isFetching = true
        },
        postPaymentSuccess: (state, action) =>{
            state.payments.isFetching = false
            state.payments.postPayment = action.payload
        },
        postPaymentFailed: (state) =>{
            state.payments.isFetching = false
            state.payments.error = true
        },
    }
})

export const{
    getPaymentStart,
    getPaymentSuccess,
    getPaymentFailed,
    postPaymentStart,
    postPaymentSuccess,
    postPaymentFailed,
    editPaymentStart,
    editPaymentSuccess,
    editPaymentFailed,
    getIdPaymentStart,
    getIdPaymentSuccess,
    getIdPaymentFailed,
    deletePaymentStart,
    deletePaymentSuccess,
    deletePaymentFailed
} = paymentSlice.actions;

export default paymentSlice.reducer