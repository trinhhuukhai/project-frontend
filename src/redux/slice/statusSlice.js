import {createSlice} from "@reduxjs/toolkit"

const statusSlice = createSlice({
    name:"status",
    initialState:{
        statuss:{
            allStatus:null,
            isFetching:false,
            error:false,
            postStatus:false,
            editStatus:false,
            getIdStatus:null,
            deleteStatus:false
        },
    },
    reducers:{
        getStatusStart:(state) =>{
            state.statuss.isFetching = true
        },
        getStatusSuccess:(state, action) =>{
            state.statuss.isFetching = false
            state.statuss.allStatus = action.payload
        },
        getStatusFailed: (state) =>{
            state.statuss.isFetching = false
            state.statuss.error = true
        },
        postStatusStart: (state) =>{
            state.statuss.isFetching = true
        },
        postStatusSuccess: (state, action) =>{
            state.statuss.isFetching = false
            state.statuss.postStatus = action.payload
        },
        postStatusFailed: (state) =>{
            state.statuss.isFetching = false
            state.statuss.error = true
        },
        editStatusStart: (state) =>{
            state.statuss.isFetching = true
        },
        editStatusSuccess: (state, action) =>{
            state.statuss.isFetching = false
            state.statuss.editStatus = action.payload
        },
        editStatusFailed: (state) =>{
            state.statuss.isFetching = false
            state.statuss.error = true
        },
        getIdStatusStart: (state) =>{
            state.statuss.isFetching = true
        },
        getIdStatusSuccess: (state, action) =>{
            state.statuss.isFetching = false
            state.statuss.getIdStatus = action.payload
        },
        getIdStatusFailed: (state) =>{
            state.statuss.isFetching = false
            state.statuss.error = true
        },

        deleteStatusStart: (state) =>{
            state.statuss.isFetching = true
        },
        deleteStatusSuccess: (state, action) =>{
            state.statuss.isFetching = false
            state.statuss.deleteStatus = action.payload
        },
        deleteStatusFailed: (state) =>{
            state.statuss.isFetching = false
            state.statuss.error = true
        },

    }
})

export const{
    getStatusStart,
    getStatusSuccess,
    getStatusFailed,
    postStatusStart,
    postStatusSuccess,
    postStatusFailed,
    editStatusStart,
    editStatusSuccess,
    editStatusFailed,
    getIdStatusStart,
    getIdStatusSuccess,
    getIdStatusFailed,
    deleteStatusStart,
    deleteStatusSuccess,
    deleteStatusFailed
} = statusSlice.actions;

export default statusSlice.reducer