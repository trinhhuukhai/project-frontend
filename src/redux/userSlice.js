import {createSlice} from "@reduxjs/toolkit"

const userSLice = createSlice({
    name:"user",
    initialState:{
        users:{
            allUsers:null,
            isFetching:false,
            error:false
        },
    },
    reducers:{
        getUserStart:(state) =>{
            state.users.isFetching = true
        },
        getUsersSuccess:(state, action) =>{
            state.users.isFetching = false
            state.users.allUsers = action.payload
        },
        getUsersFailed: (state) =>{
            state.users.isFetching = false
            state.users.error = true
        }

    }
})

export const{
    getUserStart,
    getUsersSuccess,
    getUsersFailed
} = userSLice.actions;

export default userSLice.reducer