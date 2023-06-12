import axios from "axios"
import { useDispatch } from "react-redux"
import { deleteOrderFailed, deleteOrderStart, deleteOrderSuccess, editOrderFailed, editOrderStart, editOrderSuccess, getIdOrderFailed, getIdOrderStart, getIdOrderSuccess, getOrderByUserFailed, getOrderByUserStart, getOrderByUserSuccess, getOrderFailed, getOrderItemByOidFailed, getOrderItemByOidStart, getOrderItemByOidSuccess, getOrderItemFailed, getOrderItemStart, getOrderItemSuccess, getOrderStart, getOrderSuccess, postOrderFailed, postOrderStart, postOrderSuccess } from "../slice/orderSlice"

export const gettAllOrder = async (id,dispatch) => {
    dispatch(getOrderStart())
    try {
        const res = await axios.get(`http://192.168.43.199:8443/api/v1/shop/${id}/orderItem`)
        dispatch(getOrderSuccess(res.data))
    } catch (error) {
        dispatch(getOrderFailed())
    }
}



export const postOrder = async (order, dispatch, navigate) => {
    dispatch(postOrderStart())
    try {
        const res = await axios.post("http://192.168.43.199:8443/api/v1/order/insert", order)

        dispatch(postOrderSuccess(res.data))
        navigate("/order")



    } catch (error) {
        dispatch(postOrderFailed())
    }
}

export const editOrder = async (id,order, dispatch, navigate) => {
    dispatch(editOrderStart())
    try {
        const res = await axios.put(`http://192.168.43.199:8443/api/v1/order/${id}`, order)

        dispatch(editOrderSuccess(res.data))
        navigate("/order")

    } catch (error) {
        dispatch(editOrderFailed())
    }
}

export const getIdOrder = async (id,dispatch) => {
    dispatch(getIdOrderStart())
    try {
        const res = await axios.get(`http://192.168.43.199:8443/api/v1/order/${id}`)

        dispatch(getIdOrderSuccess(res.data))

    } catch (error) {
        dispatch(getIdOrderFailed())
    }
}

export const getOrderItemById = async (id,dispatch) => {
    dispatch(getOrderItemStart())
    try {
        const res = await axios.get(`http://192.168.43.199:8443/api/v1/orderItem/${id}`)
        
        dispatch(getOrderItemSuccess(res.data))

    } catch (error) {
        dispatch(getOrderItemFailed())
    }
}


export const UpdateStatusOrder = async (idOrder,dispatch) => {
    dispatch(editOrderStart())
    try {
        const res = await axios.put(`http://192.168.43.199:8443/api/v1/order/${idOrder}/status?status= Đã xác nhận`)

        dispatch(editOrderSuccess(res.data))
        

    } catch (error) {
        dispatch(editOrderFailed())
    }
}

export const confirmOrder = async (id,dispatch,data) => {
    dispatch(editOrderStart())
    try {
        const res =  await axios.put(`http://192.168.43.199:8443/api/v1/orderItem/${id}`, data);
        
        dispatch(editOrderSuccess(res.data))
        

    } catch (error) {
        dispatch(editOrderFailed())
    }
}

export const refundOrder = async (id,dispatch,status) => {
    dispatch(editOrderStart())
    try {
        const res =  await axios.put(`http://192.168.43.199:8443/api/v1/orderItem/${id}/refund?status=${status}`);
        
        dispatch(editOrderSuccess(res.data))
        

    } catch (error) {
        dispatch(editOrderFailed())
    }
}

export const getOrderItembyOderId = async (id,dispatch) => {
    dispatch(getOrderItemByOidStart())
    try {
        const res = await axios.get(`http://192.168.43.199:8443/api/v1/order/${id}/orderItem`)
        
        dispatch(getOrderItemByOidSuccess(res.data))

    } catch (error) {
        dispatch(getOrderItemByOidFailed())
    }
}

export const getOrderItemByUserId = async (id,dispatch) => {
    dispatch(getOrderByUserStart())
    try {
        const res = await axios.get(`http://192.168.43.199:8443/api/v1/${id}/order`)
        dispatch(getOrderByUserSuccess(res.data))
    } catch (error) {
        dispatch(getOrderByUserFailed())
    }
}

export const deleteOrder = async (id,dispatch) => {
    dispatch(deleteOrderStart())
    try {
        const res = await axios.delete(`http://192.168.43.199:8443/api/v1/order/${id}`)

        dispatch(deleteOrderSuccess(res.data))
        gettAllOrder(dispatch)

    } catch (error) {
        dispatch(deleteOrderFailed())
    }
}

export const ChangeStatus = async (idOrder,dispatch) => {
    dispatch(editOrderStart())
    try {
        const res = await axios.put(`http://192.168.43.199:8443/api/v1/order/${idOrder}/status?orderStatusId=3`)
        // debugger
        dispatch(editOrderSuccess(res.data))

    } catch (error) {
        dispatch(editOrderFailed())
    }
}