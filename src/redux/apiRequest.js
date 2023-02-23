import axios from "axios";

import { loginFailed, loginStart, loginSuccess, logOutFailed, logOutStart, logOutSuccess } from "./authSlice";
import { getUsersFailed, getUsersSuccess, getUserStart } from "./userSlice";


export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart())
    try {
        const res = await axios.post("http://localhost:8080/api/v1/authenticate", user)

        dispatch(loginSuccess(res.data))

        if (res.data.roleName === 'ADMIN') {

            navigate("/")
        } else {
            dispatch(loginFailed().payload)
        }


    } catch (error) {
        dispatch(loginFailed())
    }
}

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


export const logout = async (token, dispatch, navigate) => {
    dispatch(logOutStart())

    try {
        const res = await axios.get("http://localhost:8080/api/v1/logout", {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        dispatch(logOutSuccess(res.data))
        navigate("/login")
    } catch (error) {
        dispatch(logOutFailed())
    }
}

