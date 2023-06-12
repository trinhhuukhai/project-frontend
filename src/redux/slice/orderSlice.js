import {createSlice} from "@reduxjs/toolkit"

const orderSlice = createSlice({
    name: "order",
    initialState: {
      allOrder: null,
      isFetching: false,
      error: false,
      postOrder: false,
      editOrder: false,
      getIdOrder: null,
      deleteOrder: false,
      allOrderItem:null,
      getOrderByUser:null,
      orderItem:null
    },
    reducers: {
      getOrderStart: (state) => {
        state.isFetching = true;
      },
      getOrderSuccess: (state, action) => {
        state.isFetching = false;
        state.allOrder = action.payload;
      },
      getOrderFailed: (state) => {
        state.isFetching = false;
        state.error = true;
      },
      postOrderStart: (state) => {
        state.isFetching = true;
      },
      postOrderSuccess: (state, action) => {
        state.isFetching = false;
        state.postOrder = action.payload;
      },
      postOrderFailed: (state) => {
        state.isFetching = false;
        state.error = true;
      },
      editOrderStart: (state) => {
        state.isFetching = true;
      },
      editOrderSuccess: (state, action) => {
        state.isFetching = false;
        state.editOrder = action.payload;
      },
      editOrderFailed: (state) => {
        state.isFetching = false;
        state.error = true;
      },
      getIdOrderStart: (state) => {
        state.isFetching = true;
      },
      getIdOrderSuccess: (state, action) => {
        state.isFetching = false;
        state.getIdOrder = action.payload;
      },
      getIdOrderFailed: (state) => {
        state.isFetching = false;
        state.error = true;
      },

      getOrderByUserStart: (state) => {
        state.isFetching = true;
      },
      getOrderByUserSuccess: (state, action) => {
        state.isFetching = false;
        state.getOrderByUser = action.payload;
      },
      getOrderByUserFailed: (state) => {
        state.isFetching = false;
        state.error = true;
      },
  
      deleteOrderStart: (state) => {
        state.isFetching = true;
      },
      deleteOrderSuccess: (state, action) => {
        state.isFetching = false;
        state.deleteOrder = action.payload;
      },
      deleteOrderFailed: (state) => {
        state.isFetching = false;
        state.error = true;
      },
      getOrderItemStart: (state) => {
        state.isFetching = true;
      },
      getOrderItemSuccess: (state, action) => {
        state.isFetching = false;
        state.allOrderItem = action.payload;
      },
      getOrderItemFailed: (state) => {
        state.isFetching = false;
        state.error = true;
      },
      getOrderItemByOidStart: (state) => {
        state.isFetching = true;
      },
      getOrderItemByOidSuccess: (state, action) => {
        state.isFetching = false;
        state.orderItem = action.payload;
      },
      getOrderItemByOidFailed: (state) => {
        state.isFetching = false;
        state.error = true;
      },
    },
  });

export const{
    getOrderStart,
    getOrderSuccess,
    getOrderFailed,
    postOrderStart,
    postOrderSuccess,
    postOrderFailed,
    editOrderStart,
    editOrderSuccess,
    editOrderFailed,
    getIdOrderStart,
    getIdOrderSuccess,
    getIdOrderFailed,
    deleteOrderStart,
    deleteOrderSuccess,
    deleteOrderFailed,
    getOrderItemStart,
    getOrderItemSuccess,
    getOrderItemFailed,
    getOrderByUserStart,
    getOrderByUserSuccess,
    getOrderByUserFailed,
    getOrderItemByOidStart,
    getOrderItemByOidSuccess,
    getOrderItemByOidFailed
} = orderSlice.actions;

export default orderSlice.reducer