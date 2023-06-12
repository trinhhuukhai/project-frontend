import axios from "axios"
import { deleteCategoryFailed, deleteCategoryStart, deleteCategorySuccess, editCategoryFailed, editCategoryStart, editCategorySuccess, getCategoryFailed, getCategoryStart, getCategorySuccess, getIdCategoryFailed, getIdCategoryStart, getIdCategorySuccess, getProductCategoryFailed, getProductCategoryStart, getProductCategorySuccess, postCategoryFailed, postCategoryStart, postCategorySuccess } from "../slice/categorySlice"
export const gettAllCategory = async (dispatch) => {
    dispatch(getCategoryStart())
    try {
        const res = await axios.get(`http://192.168.43.199:8443/api/v1/category/getAllCategory`)
        dispatch(getCategorySuccess(res.data))
    } catch (error) {
        dispatch(getCategoryFailed())
    }
}

export const postCategory = async (category, token, dispatch, navigate) => {
    dispatch(postCategoryStart())
    try {
        const res = await axios.post("http://192.168.43.199:8443/api/v1/category/insert", category,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })

        dispatch(postCategorySuccess(res.data))
        navigate("/category")

    } catch (error) {
        dispatch(postCategoryFailed())
    }
}

export const editCategory = async (id, category, token, dispatch, navigate) => {
    dispatch(editCategoryStart())
    try {
        const res = await axios.put(`http://192.168.43.199:8443/api/v1/category/${id}`, category,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })

        dispatch(editCategorySuccess(res.data))

        navigate("/category")
    } catch (error) {
        dispatch(editCategoryFailed())
    }
}

export const getIdCategory = async (id, token, dispatch) => {
    dispatch(getIdCategoryStart())
    try {
        const res = await axios.get(`http://192.168.43.199:8443/api/v1/category/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        dispatch(getIdCategorySuccess(res.data))
    } catch (error) {
        dispatch(getIdCategoryFailed())
    }
}

export const getProductbyCategory = async (id, dispatch) => {
    dispatch(getProductCategoryStart())
    try {
        const res = await axios.get(`http://192.168.43.199:8443/api/v1/category/${id}/product`)
        dispatch(getProductCategorySuccess(res.data))
    } catch (error) {
        dispatch(getProductCategoryFailed())
    }
}

export const deleteCategory = async (id, token, dispatch) => {
    dispatch(deleteCategoryStart())
    try {
        const res = await axios.delete(`http://192.168.43.199:8443/api/v1/category/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        dispatch(deleteCategorySuccess(res.data))
        gettAllCategory(dispatch)

    } catch (error) {
        dispatch(deleteCategoryFailed())
    }
}