import axios from "axios"
import { getPaymentFailed, getPaymentStart, getPaymentSuccess, postPaymentFailed, postPaymentStart, postPaymentSuccess } from "../slice/paymentSlice"

export const gettAllPayment = async (dispatch) => {
    dispatch(getPaymentStart())

    try {
        const res = await axios.get("http://192.168.43.199:8443/api/v1/payment/getAllPayment")
        dispatch(getPaymentSuccess(res.data))
    } catch (error) {
        dispatch(getPaymentFailed())
    }
}

export const postPayment = async (Payment, dispatch, navigate) => {
    dispatch(postPaymentStart())
    try {
        const res = await axios.post("http://192.168.43.199:8443/api/v1/payment/insert", Payment)

        dispatch(postPaymentSuccess(res.data))
        navigate("/client/order")



    } catch (error) {
        dispatch(postPaymentFailed())
    }
}
