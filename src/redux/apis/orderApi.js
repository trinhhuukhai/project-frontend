import axios from "axios"
import { useDispatch } from "react-redux"
import { deleteOrderFailed, deleteOrderStart, deleteOrderSuccess, editOrderFailed, editOrderStart, editOrderSuccess, getIdOrderFailed, getIdOrderStart, getIdOrderSuccess, getOrderFailed, getOrderItemFailed, getOrderItemStart, getOrderItemSuccess, getOrderStart, getOrderSuccess, postOrderFailed, postOrderStart, postOrderSuccess } from "../slice/orderSlice"

export const gettAllOrder = async (dispatch) => {
    dispatch(getOrderStart())
    try {
        const res = await axios.get("http://localhost:8080/api/v1/order/getOrder")
        dispatch(getOrderSuccess(res.data))
    } catch (error) {
        dispatch(getOrderFailed())
    }
}



export const postOrder = async (order, dispatch, navigate) => {
    dispatch(postOrderStart())
    try {
        const res = await axios.post("http://localhost:8080/api/v1/order/insert", order)

        dispatch(postOrderSuccess(res.data))
        navigate("/order")



    } catch (error) {
        dispatch(postOrderFailed())
    }
}

export const editOrder = async (id,order, dispatch, navigate) => {
    dispatch(editOrderStart())
    try {
        const res = await axios.put(`http://localhost:8080/api/v1/order/${id}`, order)

        dispatch(editOrderSuccess(res.data))
        navigate("/order")



    } catch (error) {
        dispatch(editOrderFailed())
    }
}

export const getIdOrder = async (id,dispatch) => {
    dispatch(getIdOrderStart())
    try {
        const res = await axios.get(`http://localhost:8080/api/v1/order/${id}`)

        dispatch(getIdOrderSuccess(res.data))

    } catch (error) {
        dispatch(getIdOrderFailed())
    }
}

export const getOrderItembyOderId = async (id,dispatch) => {
    dispatch(getOrderItemStart())
    try {
        const res = await axios.get(`http://localhost:8080/api/v1/order/orderItem/${id}`)

        dispatch(getOrderItemSuccess(res.data))

    } catch (error) {
        dispatch(getOrderItemFailed())
    }
}

export const deleteOrder = async (id,dispatch) => {
    dispatch(deleteOrderStart())
    try {
        const res = await axios.delete(`http://localhost:8080/api/v1/order/${id}`)

        dispatch(deleteOrderSuccess(res.data))
        gettAllOrder(dispatch)

    } catch (error) {
        dispatch(deleteOrderFailed())
    }
}