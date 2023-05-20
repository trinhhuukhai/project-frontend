import axios from "axios"
import { useNavigate } from "react-router-dom"
import { deleteShippingFailed, deleteShippingStart, deleteShippingSuccess, editShippingFailed, editShippingStart, editShippingSuccess, getIdShippingFailed, getIdShippingStart, getIdShippingSuccess, getShippingFailed, getShippingStart, getShippingSuccess, postShippingFailed, postShippingStart, postShippingSuccess } from "../slice/shippingSlice"

export const gettAllShipping = async (dispatch) => {
    dispatch(getShippingStart())

    try {
        const res = await axios.get("http://localhost:8080/api/v1/ship/getAllShip")
        dispatch(getShippingSuccess(res.data))
    } catch (error) {
        dispatch(getShippingFailed())
    }
}

export const postShipping = async (shipping, dispatch, navigate) => {
    dispatch(postShippingStart())
    try {
        const res = await axios.post("http://localhost:8080/api/v1/ship/insert", shipping)

        dispatch(postShippingSuccess(res.data))
        navigate("/shipping")



    } catch (error) {
        dispatch(postShippingFailed())
    }
}

export const editShipping = async (id,shipping, dispatch, navigate) => {
    dispatch(editShippingStart())
    try {
        const res = await axios.put(`http://localhost:8080/api/v1/ship/${id}`, shipping)

        dispatch(editShippingSuccess(res.data))
        navigate("/shipping")



    } catch (error) {
        dispatch(editShippingFailed())
    }
}

export const getIdShipping = async (id,dispatch) => {
    dispatch(getIdShippingStart())
    try {
        const res = await axios.get(`http://localhost:8080/api/v1/ship/${id}`)

        dispatch(getIdShippingSuccess(res.data))

    } catch (error) {
        dispatch(getIdShippingFailed())
    }
}

export const deleteShipping = async (id,dispatch) => {
    dispatch(deleteShippingStart())
    try {
        const res = await axios.delete(`http://localhost:8080/api/v1/ship/${id}`)

        dispatch(deleteShippingSuccess(res.data))
        gettAllShipping(dispatch)

    } catch (error) {
        dispatch(deleteShippingFailed())
    }
}