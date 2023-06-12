import axios from "axios"
import { deleteProductFailed, deleteProductStart, deleteProductSuccess, editProductFailed, editProductStart, editProductSuccess, getIdProductFailed, getIdProductStart, getIdProductSuccess, getProductFailed, getProductStart, getProductSuccess, postProductFailed, postProductStart, postProductSuccess } from "../slice/productSlice"
import { useParams } from "react-router-dom"



export const gettAllProduct = async (id,dispatch) => {
    dispatch(getProductStart())
    try {
        const res = await axios.get(`http://192.168.43.199:8443/api/v1/shop/${id}/product`)
        
        dispatch(getProductSuccess(res.data))
    } catch (error) {
        dispatch(getProductFailed())
    }
}

export const gettAllProductPagination = async (dispatch) => {
    dispatch(getProductStart())
    try {
        const res = await axios.get(`http://192.168.43.199:8443/api/v1/product/getAllProduct`)
        // debugger
        dispatch(getProductSuccess(res.data))
    } catch (error) {
        dispatch(getProductFailed())
    }
}


export const postProduct = async (formData, newPro, dispatch, navigate) => {
    dispatch(postProductStart())
    try {
        const res = await axios.post("http://192.168.43.199:8443/api/v1/product/insert", formData, {
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


export const postProductImage = async (id,formData, dispatch, navigate) => {
 
    dispatch(postProductStart());
    try {
        const boundary = Math.random().toString();
        const res = await axios.post(
            `http://192.168.43.199:8443/api/v1/product/insertImage`,
            formData,
            {
                headers: {
                    'Content-Type': `multipart/form-data; boundary=${boundary}`,
                },
            }
        );
        dispatch(postProductSuccess(res.data));
        navigate(`/product/detail/${id}`)
      
    } catch (error) {
        dispatch(postProductFailed());
    }
};



export const editProduct = async (id, formData, dispatch, navigate) => {
    dispatch(editProductStart());
    try {
        const boundary = Math.random().toString()
        const res = await axios.put(
            `http://192.168.43.199:8443/api/v1/product/${id}`,
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
        const res = await axios.get(`http://192.168.43.199:8443/api/v1/product/${id}`)

        dispatch(getIdProductSuccess(res.data))

    } catch (error) {
        dispatch(getIdProductFailed())
    }
}

export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart())
    try {
        const res = await axios.delete(`http://192.168.43.199:8443/api/v1/product/${id}`)

        dispatch(deleteProductSuccess(res.data))
        gettAllProduct(dispatch)

    } catch (error) {
        dispatch(deleteProductFailed())
    }
}

export const deleteImage = async (id, dispatch) => {
    dispatch(deleteProductStart())
    try {
        const res = await axios.delete(`http://192.168.43.199:8443/api/v1/product/image/${id}`)

        dispatch(deleteProductSuccess(res.data))
        gettAllProduct(dispatch)

    } catch (error) {
        dispatch(deleteProductFailed())
    }
}