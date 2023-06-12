import axios from "axios"
import { deleteCartFailed, deleteCartStart, deleteCartSuccess, editCartFailed, editCartStart, editCartSuccess, getCartFailed, getCartStart, getCartSuccess, postCartFailed, postCartStart, postCartSuccess, postOrderItemFailed, postOrderItemStart, postOrderItemSuccess } from "../slice/cartSlice"




export const postCart = async (Data, dispatch) => {
    dispatch(postCartStart())
    try {
        const res = await axios.post("http://192.168.43.199:8443/api/v1/cartItem/insert",Data)
        // debugger
        alert(res.data.message)
        dispatch(postCartSuccess(res.data))
        // navigate("/payment")
    } catch (error) {
        alert(error.response.data.message)
        dispatch(postCartFailed())
    }
}

export const postOrder = async (Data, dispatch, navigate) => {
    dispatch(postOrderItemStart())
    try {
        const res = await axios.post("http://192.168.43.199:8443/api/v1/orderItem/insertFromCart",Data)
        alert(res.data.message)
        dispatch(postOrderItemSuccess(res.data))
        navigate("/client/payment")
    } catch (error) {
        dispatch(postOrderItemFailed())
    
    }
}

export const getCartByUser = async (uId, dispatch) => {
    dispatch(getCartStart())
    try {
        const res = await axios.get(`http://192.168.43.199:8443/api/v1/cartItem/user/${uId}`)
        // debugger
        dispatch(getCartSuccess(res.data))
        // navigate("/payment")
    } catch (error) {
        dispatch(getCartFailed())
    }
}

export const deleteCart= async (id,dispatch) => {
    dispatch(deleteCartStart())
    try {
        const res = await axios.delete(`http://192.168.43.199:8443/api/v1/cartItem/${id}`)
        // debugger
        dispatch(deleteCartSuccess(res.data))
        // getCartByUser(id,dispatch)

    } catch (error) {
        dispatch(deleteCartFailed())
    }
}

export const editCart= async (Data,id,dispatch) => {
    dispatch(editCartStart())
    try {
        const res = await axios.put(`http://192.168.43.199:8443/api/v1/cartItem/${id}`, Data)
        
        alert(res.data.message)
        dispatch(editCartSuccess(res.data))

    } catch (error) {
        // debugger
        alert(error.response.data.message)
        dispatch(editCartFailed())
    }
}

