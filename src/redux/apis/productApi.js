import axios from "axios"
import { deleteProductFailed, deleteProductStart, deleteProductSuccess, editProductFailed, editProductStart, editProductSuccess, getIdProductFailed, getIdProductStart, getIdProductSuccess, getProductFailed, getProductStart, getProductSuccess, postProductFailed, postProductStart, postProductSuccess } from "../slice/productSlice"

export const gettAllProduct = async (dispatch) => {
    dispatch(getProductStart())
    try {
        const res = await axios.get("http://localhost:8080/api/v1/product/getAllProduct")
        dispatch(getProductSuccess(res.data))
    } catch (error) {
        dispatch(getProductFailed())
    }
}

export const gettAllProductPagination = async (pn,pz,dispatch) => {
    dispatch(getProductStart())
    try {
        const res = await axios.get(`http://localhost:8080/api/v1/product/paginAndSort/${pn}/${pz}`)
        dispatch(getProductSuccess(res.data))
    } catch (error) {
        dispatch(getProductFailed())
    }
}


export const postProduct = async (formData, newPro, dispatch, navigate) => {
    dispatch(postProductStart())
    try {
        const res = await axios.post("http://localhost:8080/api/v1/product/insert", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: newPro
        })
        dispatch(postProductSuccess(res.data))
        navigate("/product")
    } catch (error) {
        dispatch(postProductFailed())
    }
}

export const editProduct = async (id, formData, dispatch, navigate) => {
    dispatch(editProductStart());
    try {
        const boundary = Math.random().toString()
        const res = await axios.put(
            `http://localhost:8080/api/v1/product/${id}`,
            formData,
            {
                headers: {
                    'Content-Type': `multipart/form-data; boundary=${boundary}`
                },
            }
        );
        dispatch(editProductSuccess(res.data));
        navigate("/product");
    } catch (error) {
        dispatch(editProductFailed());
    }
};

export const getIdProduct = async (id, dispatch) => {
    dispatch(getIdProductStart())
    try {
        const res = await axios.get(`http://localhost:8080/api/v1/product/${id}`)

        dispatch(getIdProductSuccess(res.data))

    } catch (error) {
        dispatch(getIdProductFailed())
    }
}

export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart())
    try {
        const res = await axios.delete(`http://localhost:8080/api/v1/product/${id}`)

        dispatch(deleteProductSuccess(res.data))
        gettAllProduct(dispatch)

    } catch (error) {
        dispatch(deleteProductFailed())
    }
}