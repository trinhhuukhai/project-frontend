import { createSlice } from "@reduxjs/toolkit"

const customerSLice = createSlice({
    name: "customer",
    initialState: {

        allCustomer: null,
        isFetching: false,
        error: false,
        postCustomer: false,
        editCustomer: false,
        getIdCustomer: null,
        deleteCustomer: false

    },
    reducers: {
        getCustomerStart: (state) => {
            state.isFetching = true
        },
        getCustomeSuccess: (state, action) => {
            state.isFetching = false
            state.allCustomer = action.payload
        },
        getCustomeFailed: (state) => {
            state.isFetching = false
            state.error = true
        },
        postCustomerStart: (state) => {
            state.isFetching = true
        },
        postCustomerSuccess: (state, action) => {
            state.isFetching = false
            state.postCustomer = action.payload
        },
        postCustomerFailed: (state) => {
            state.isFetching = false
            state.error = true
        },
        editCustomerStart: (state) => {
            state.isFetching = true
        },
        editCustomerSuccess: (state, action) => {
            state.isFetching = false
            state.editCustomer = action.payload
        },
        editCustomerFailed: (state) => {
            state.isFetching = false
            state.error = true
        },
        getIdCustomerStart: (state) => {
            state.isFetching = true
        },
        getIdCustomerSuccess: (state, action) => {
            state.isFetching = false
            state.getIdCustomer = action.payload
        },
        getIdCustomerFailed: (state) => {
            state.isFetching = false
            state.error = true
        },

        deleteCustomerStart: (state) => {
            state.isFetching = true
        },
        deleteCustomerSuccess: (state, action) => {
            state.isFetching = false
            state.deleteCustomer = action.payload
        },
        deleteCustomerFailed: (state) => {
            state.isFetching = false
            state.error = true
        },

    }
})

export const {
    getCustomerStart,
    getCustomeSuccess,
    getCustomeFailed,
    postCustomerStart,
    postCustomerSuccess,
    postCustomerFailed,
    editCustomerStart,
    editCustomerSuccess,
    editCustomerFailed,
    getIdCustomerStart,
    getIdCustomerSuccess,
    getIdCustomerFailed,
    deleteCustomerStart,
    deleteCustomerSuccess,
    deleteCustomerFailed
} = customerSLice.actions;

export default customerSLice.reducer