import axios from "axios"
import { useNavigate } from "react-router-dom"
import { deleteReviewFailed, deleteReviewStart, deleteReviewSuccess, editReviewFailed, editReviewStart, editReviewSuccess, getIdReviewFailed, getIdReviewStart, getIdReviewSuccess, getReviewFailed, getReviewStart, getReviewSuccess, postReviewFailed, postReviewStart, postReviewSuccess } from "../slice/reviewSlice"

export const gettAllReview = async (id,dispatch) => {
    dispatch(getReviewStart())

    try {
        const res = await axios.get(`http://192.168.43.199:8443/api/v1/review/product/${id}`)
        
        dispatch(getReviewSuccess(res.data))
    } catch (error) {
        dispatch(getReviewFailed())
    }
}

export const postReview = async (id,review, dispatch, navigate) => {
    dispatch(postReviewStart())
    try {
        const res = await axios.post("http://192.168.43.199:8443/api/v1/review/insert", review)
        debugger
        dispatch(postReviewSuccess(res.data))
        navigate(`/product/detail/${id}`)



    } catch (error) {
        dispatch(postReviewFailed())
    }
}

export const editReview = async (id,review, dispatch, navigate) => {
    dispatch(editReviewStart())
    try {
        const res = await axios.put(`http://192.168.43.199:8443/api/v1/review/${id}`, review)
        dispatch(editReviewSuccess(res.data))
        navigate(`/product/detail/${id}`)



    } catch (error) {
        dispatch(editReviewFailed())
    }
}

export const getIdReview = async (id,dispatch) => {
    dispatch(getIdReviewStart())
    try {
        const res = await axios.get(`http://192.168.43.199:8443/api/v1/review/${id}`)

        dispatch(getIdReviewSuccess(res.data))

    } catch (error) {
        dispatch(getIdReviewFailed())
    }
}

export const deleteReview = async (id,dispatch) => {
    dispatch(deleteReviewStart())
    try {
        const res = await axios.delete(`http://192.168.43.199:8443/api/v1/review/${id}`)

        dispatch(deleteReviewSuccess(res.data))
        gettAllReview(dispatch)

    } catch (error) {
        dispatch(deleteReviewFailed())
    }
}