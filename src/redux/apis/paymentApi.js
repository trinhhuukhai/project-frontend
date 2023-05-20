import axios from "axios"
import { deletePaymentFailed, deletePaymentStart, deletePaymentSuccess, editPaymentFailed, editPaymentStart, editPaymentSuccess, getIdPaymentFailed, getIdPaymentStart, getIdPaymentSuccess, getPaymentFailed, getPaymentStart, getPaymentSuccess, postPaymentFailed, postPaymentStart, postPaymentSuccess } from "../slice/paymentSlice"

export const gettAllPayment = async (dispatch) => {
    dispatch(getPaymentStart())

    try {
        const res = await axios.get("http://localhost:8080/api/v1/payment/getAllPayment")
        dispatch(getPaymentSuccess(res.data))
    } catch (error) {
        dispatch(getPaymentFailed())
    }
}

export const postPayment = async (Payment, dispatch, navigate) => {
    dispatch(postPaymentStart())
    try {
        const res = await axios.post("http://localhost:8080/api/v1/payment/insert", Payment)

        dispatch(postPaymentSuccess(res.data))
        navigate("/payment")



    } catch (error) {
        dispatch(postPaymentFailed())
    }
}

export const editPayment = async (id,Payment, dispatch, navigate) => {
    dispatch(editPaymentStart())
    try {
        const res = await axios.put(`http://localhost:8080/api/v1/payment/${id}`, Payment)

        dispatch(editPaymentSuccess(res.data))
        navigate("/payment")



    } catch (error) {
        dispatch(editPaymentFailed())
    }
}

export const getIdPayment = async (id,dispatch) => {
    dispatch(getIdPaymentStart())
    try {
        const res = await axios.get(`http://localhost:8080/api/v1/payment/${id}`)

        dispatch(getIdPaymentSuccess(res.data))

    } catch (error) {
        dispatch(getIdPaymentFailed())
    }
}

export const deletePayment = async (id,dispatch) => {
    dispatch(deletePaymentStart())
    try {
        const res = await axios.delete(`http://localhost:8080/api/v1/payment/${id}`)

        dispatch(deletePaymentSuccess(res.data))
        gettAllPayment(dispatch)

    } catch (error) {
        dispatch(deletePaymentFailed())
    }
}