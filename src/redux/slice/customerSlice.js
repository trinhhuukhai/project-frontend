import {createSlice} from "@reduxjs/toolkit"

const customerSLice = createSlice({
    name:"customer",
    initialState:{
        customers:{
            allCustomer:null,
            isFetching:false,
            error:false,
            postCustomer:false,
            editCustomer:false,
            getIdCustomer:null,
            deleteCustomer:false
        },
    },
    reducers:{
        getCustomerStart:(state) =>{
            state.customers.isFetching = true
        },
        getCustomeSuccess:(state, action) =>{
            state.customers.isFetching = false
            state.customers.allCustomer = action.payload
        },
        getCustomeFailed: (state) =>{
            state.customers.isFetching = false
            state.customers.error = true
        },
        postCustomerStart: (state) =>{
            state.customers.isFetching = true
        },
        postCustomerSuccess: (state, action) =>{
            state.customers.isFetching = false
            state.customers.postCustomer = action.payload
        },
        postCustomerFailed: (state) =>{
            state.customers.isFetching = false
            state.customers.error = true
        },
        editCustomerStart: (state) =>{
            state.customers.isFetching = true
        },
        editCustomerSuccess: (state, action) =>{
            state.customers.isFetching = false
            state.customers.editCustomer = action.payload
        },
        editCustomerFailed: (state) =>{
            state.customers.isFetching = false
            state.customers.error = true
        },
        getIdCustomerStart: (state) =>{
            state.customers.isFetching = true
        },
        getIdCustomerSuccess: (state, action) =>{
            state.customers.isFetching = false
            state.customers.getIdCustomer = action.payload
        },
        getIdCustomerFailed: (state) =>{
            state.customers.isFetching = false
            state.customers.error = true
        },

        deleteCustomerStart: (state) =>{
            state.customers.isFetching = true
        },
        deleteCustomerSuccess: (state, action) =>{
            state.customers.isFetching = false
            state.customers.deleteCustomer = action.payload
        },
        deleteCustomerFailed: (state) =>{
            state.customers.isFetching = false
            state.customers.error = true
        },

    }
})

export const{
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