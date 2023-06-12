import { createSlice} from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "auth",
    initialState:{ //chua prop, state mong muon
        login:{
            currentUser:null,
            isFetching:false,
            getInfo:null,
            error: false,
            register:null,
            msg:"",
            getUserById:null,
            editUser:null,
            deleteUser:null
        },
    },
    reducers:{
        loginStart:(state) =>{
            state.login.isFetching = true
        },
        loginSuccess:(state, action)=>{
            state.login.isFetching = false
            state.login.currentUser = action.payload
            state.login.error= false
            state.login.msg="Login Successfully"
        },
        loginFailed:(state) =>{
            state.login.isFetching = false
            state.login.error = true
            state.login.msg="Login Fail"
        },

        logOutSuccess:(state) =>{
            state.login.isFetching = false
            state.login.currentUser = null
            state.login.error = false
        },
        logOutFailed:(state)=>{
            state.login.isFetching = false
            state.login.error = true
        },
        logOutStart:(state) =>{
            state.login.isFetching = true
        },
        registerSuccess:(state, action) =>{
            state.login.isFetching = false
            state.login.register = action.payload
            state.login.error = false
        },
        registerFailed:(state)=>{
            state.login.isFetching = false
            state.login.error = true
        },
        registerStart:(state) =>{
            state.login.isFetching = true
        },
        getInfoSuccess:(state, action) =>{
            state.login.isFetching = false
            state.login.getInfo = action.payload
            state.login.error = false
        },
        getInfoFailed:(state)=>{
            state.login.isFetching = false
            state.login.error = true
        },
        getInfoStart:(state) =>{
            state.login.isFetching = true
        },

        getUserByIdSuccess:(state, action) =>{
            state.login.isFetching = false
            state.login.getUserById = action.payload
            state.login.error = false
        },
        getUserByIdFailed:(state)=>{
            state.login.isFetching = false
            state.login.error = true
        },
        getUserByIdStart:(state) =>{
            state.login.isFetching = true
        },
        editUserSuccess:(state, action) =>{
            state.login.isFetching = false
            state.login.editUser = action.payload
            state.login.error = false
        },
        editUserFailed:(state)=>{
            state.login.isFetching = false
            state.login.error = true
        },
        editUserStart:(state) =>{
            state.login.isFetching = true
        },
        deleteUserSuccess:(state, action) =>{
            state.login.isFetching = false
            state.login.deleteUser = action.payload
            state.login.error = false
        },
        deleteUserFailed:(state)=>{
            state.login.isFetching = false
            state.login.error = true
        },
        deleteUserStart:(state) =>{
            state.login.isFetching = true
        },
        
    }
})

export const{
    loginStart,
    loginFailed,
    loginSuccess,
    logOutSuccess,
    logOutFailed,
    logOutStart,
    registerStart,
    registerSuccess,
    registerFailed,
    getInfoFailed,getInfoStart,getInfoSuccess,
    getUserByIdStart, getUserByIdSuccess, getUserByIdFailed,
    editUserStart,
    editUserSuccess, editUserFailed,deleteUserFailed,deleteUserStart,deleteUserSuccess
} = authSlice.actions

export default authSlice.reducer