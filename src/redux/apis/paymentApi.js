import axios from "axios"
import { getPaymentFailed, getPaymentStart, getPaymentSuccess, postPaymentFailed, postPaymentStart, postPaymentSuccess } from "../slice/paymentSlice"

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
        navigate("/client/order")



    } catch (error) {
        dispatch(postPaymentFailed())
    }
}
