import axios from "axios"
import { useNavigate } from "react-router-dom"
import { deleteCustomerFailed, deleteCustomerStart, deleteCustomerSuccess, editCustomerFailed, editCustomerStart, editCustomerSuccess, getCustomeFailed, getCustomerStart, getCustomeSuccess, getIdCustomerFailed, getIdCustomerStart, getIdCustomerSuccess, postCustomerFailed, postCustomerStart, postCustomerSuccess } from "../slice/customerSlice"

export const gettAllCustomer = async (dispatch) => {
    dispatch(getCustomerStart())

    try {
        const res = await axios.get("http://localhost:8080/api/v1/customer/getAllCustomer")
        dispatch(getCustomeSuccess(res.data))
    } catch (error) {
        dispatch(getCustomeFailed())
    }
}

export const postCustomer = async (customer, dispatch, navigate) => {
    dispatch(postCustomerStart())
    try {
        const res = await axios.post("http://localhost:8080/api/v1/customer/insert", customer)

        dispatch(postCustomerSuccess(res.data))
        navigate("/customer")

        // if (res.data.roleName === 'ADMIN') {

        //     navigate("/")
        // } else {
        //     dispatch(loginFailed().payload)
        // }


    } catch (error) {
        dispatch(postCustomerFailed())
    }
}

export const editCustomer = async (id,customer, dispatch, navigate) => {
    dispatch(editCustomerStart())
    try {
        const res = await axios.put(`http://localhost:8080/api/v1/customer/${id}`, customer)

        dispatch(editCustomerSuccess(res.data))
        navigate("/customer")

        // if (res.data.roleName === 'ADMIN') {

        //     navigate("/")
        // } else {
        //     dispatch(loginFailed().payload)
        // }


    } catch (error) {
        dispatch(editCustomerFailed())
    }
}

export const getIdCustomer = async (id,dispatch) => {
    dispatch(getIdCustomerStart())
    try {
        const res = await axios.get(`http://localhost:8080/api/v1/customer/${id}`)

        dispatch(getIdCustomerSuccess(res.data))

    } catch (error) {
        dispatch(getIdCustomerFailed())
    }
}

export const deleteCustomer = async (id,dispatch) => {
    dispatch(deleteCustomerStart())
    try {
        const res = await axios.delete(`http://localhost:8080/api/v1/customer/${id}`)

        dispatch(deleteCustomerSuccess(res.data))
        gettAllCustomer(dispatch)

    } catch (error) {
        dispatch(deleteCustomerFailed())
    }
}