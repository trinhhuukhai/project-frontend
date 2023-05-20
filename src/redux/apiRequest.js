import axios from "axios";

import { getInfoFailed, getInfoStart, getInfoSuccess, loginFailed, loginStart, loginSuccess, logOutFailed, logOutStart, logOutSuccess, registerFailed, registerStart, registerSuccess } from "./authSlice";
import { getUsersFailed, getUsersSuccess, getUserStart } from "./userSlice";


export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart())
    try {
        const res = await axios.post("http://localhost:8080/api/v1/authenticate", user)
        
        dispatch(loginSuccess(res.data))
        if(res.data.roleName === "ADMIN"){
            localStorage.setItem("token",res.data.token)
            localStorage.setItem("id", res.data.id)
            localStorage.setItem("role", res.data.roleName)
            navigate("/")
        }
        if(res.data.roleName === "OWNER"){
            localStorage.setItem("token",res.data.token)
            localStorage.setItem("id", res.data.id)
            localStorage.setItem("role", res.data.roleName)
            navigate("/")
        }
        if(res.data.roleName === "CUSTOMER"){
            localStorage.setItem("token",res.data.token)
            localStorage.setItem("id", res.data.id)
            localStorage.setItem("role", res.data.roleName)
            navigate("/client")
        }
      
    } catch (error) {
        dispatch(loginFailed())
    }
}

export const register = async (user, dispatch, navigate) => {
    dispatch(registerStart())
    try {
        const res = await axios.post("http://localhost:8080/api/v1/register", user)
        debugger
        dispatch(registerSuccess(res.data))
        navigate("/login")
    } catch (error) {
        dispatch(registerFailed())
    }
}

export const addAccount = async (user, dispatch, navigate) => {
    dispatch(registerStart())
    try {
        const res = await axios.post("http://localhost:8080/api/v1/register", user)
        debugger
        dispatch(registerSuccess(res.data))
        navigate("/account")
    } catch (error) {
        dispatch(registerFailed())
    }
}

export const getInfoUser = async (id, dispatch) => {
    dispatch(getInfoStart())
    try {
        const res = await axios.get(`http://localhost:8080/api/v1/${id}`)
        dispatch(getInfoSuccess(res.data))
    } catch (error) {
        dispatch(getInfoFailed())
    }
}

// export const gettAllUsers = async (token, dispatch) => {
//     dispatch(getUserStart())

//     try {
//         const res = await axios.get("http://localhost:8080/api/v1/getAllUser", {
//             headers:{
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//         dispatch(getUsersSuccess(res.data))
//     } catch (error) {
//         dispatch(getUsersFailed())
//     }
// }

export const gettAllUsers = async (token, dispatch) => {
    dispatch(getUserStart())

    try {
        const res = await axios.get("http://localhost:8080/api/v1/getAllUser", {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        dispatch(getUsersSuccess(res.data))
    } catch (error) {
        dispatch(getUsersFailed())
    }
}


export const logout = async (dispatch, navigate) => {
    dispatch(logOutStart())

    try {
        const res = await axios.get("http://localhost:8080/api/v1/logout"
        // {
        //     headers:{
        //         'Authorization': `Bearer ${token}`
        //     }
        // }
        )
        dispatch(logOutSuccess(res.data))
        localStorage.clear();
        navigate("/login")
    } catch (error) {
        dispatch(logOutFailed())
    }
}

