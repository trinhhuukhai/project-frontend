import axios from "axios"
import { useNavigate } from "react-router-dom"
import { deleteReviewFailed, deleteReviewStart, deleteReviewSuccess, editReviewFailed, editReviewStart, editReviewSuccess, getIdReviewFailed, getIdReviewStart, getIdReviewSuccess, getReviewFailed, getReviewStart, getReviewSuccess, postReviewFailed, postReviewStart, postReviewSuccess } from "../slice/reviewSlice"

export const gettAllReview = async (dispatch) => {
    dispatch(getReviewStart())

    try {
        const res = await axios.get("http://localhost:8080/api/v1/review/getAllReview")
        dispatch(getReviewSuccess(res.data))
    } catch (error) {
        dispatch(getReviewFailed())
    }
}

export const postReview = async (review, dispatch, navigate) => {
    dispatch(postReviewStart())
    try {
        const res = await axios.post("http://localhost:8080/api/v1/review/insert", review)

        dispatch(postReviewSuccess(res.data))
        navigate("/review")



    } catch (error) {
        dispatch(postReviewFailed())
    }
}

export const editReview = async (id,review, dispatch, navigate) => {
    dispatch(editReviewStart())
    try {
        const res = await axios.put(`http://localhost:8080/api/v1/review/${id}`, review)

        dispatch(editReviewSuccess(res.data))
        navigate("/review")



    } catch (error) {
        dispatch(editReviewFailed())
    }
}

export const getIdReview = async (id,dispatch) => {
    dispatch(getIdReviewStart())
    try {
        const res = await axios.get(`http://localhost:8080/api/v1/review/${id}`)

        dispatch(getIdReviewSuccess(res.data))

    } catch (error) {
        dispatch(getIdReviewFailed())
    }
}

export const deleteReview = async (id,dispatch) => {
    dispatch(deleteReviewStart())
    try {
        const res = await axios.delete(`http://localhost:8080/api/v1/review/${id}`)

        dispatch(deleteReviewSuccess(res.data))
        gettAllReview(dispatch)

    } catch (error) {
        dispatch(deleteReviewFailed())
    }
}