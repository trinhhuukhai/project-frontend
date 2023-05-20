import axios from "axios"
import { useNavigate } from "react-router-dom"
import { deleteStatusFailed, deleteStatusStart, deleteStatusSuccess, editStatusFailed, editStatusStart, editStatusSuccess, getIdStatusFailed, getIdStatusStart, getIdStatusSuccess, getStatusFailed, getStatusStart, getStatusSuccess, postStatusFailed, postStatusStart, postStatusSuccess } from "../slice/statusSlice"

export const gettAllStatus = async (dispatch) => {
    dispatch(getStatusStart())

    try {
        const res = await axios.get("http://localhost:8080/api/v1/order_status/getAllStatus")
        dispatch(getStatusSuccess(res.data))
    } catch (error) {
        dispatch(getStatusFailed())
    }
}

export const postStatus = async (Status, dispatch, navigate) => {
    dispatch(postStatusStart())
    try {
        const res = await axios.post("http://localhost:8080/api/v1/order_status/insert", Status)

        dispatch(postStatusSuccess(res.data))
        navigate("/status")



    } catch (error) {
        dispatch(postStatusFailed())
    }
}

export const editStatus = async (id,Status, dispatch, navigate) => {
    dispatch(editStatusStart())
    try {
        const res = await axios.put(`http://localhost:8080/api/v1/order_status/${id}`, Status)

        dispatch(editStatusSuccess(res.data))
        navigate("/status")



    } catch (error) {
        dispatch(editStatusFailed())
    }
}

export const getIdStatus = async (id,dispatch) => {
    dispatch(getIdStatusStart())
    try {
        const res = await axios.get(`http://localhost:8080/api/v1/order_status/${id}`)

        dispatch(getIdStatusSuccess(res.data))

    } catch (error) {
        dispatch(getIdStatusFailed())
    }
}

export const deleteStatus = async (id,dispatch) => {
    dispatch(deleteStatusStart())
    try {
        const res = await axios.delete(`http://localhost:8080/api/v1/order_status/${id}`)

        dispatch(deleteStatusSuccess(res.data))
        gettAllStatus(dispatch)

    } catch (error) {
        dispatch(deleteStatusFailed())
    }
}