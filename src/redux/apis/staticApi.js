import axios from "axios"
import { getStaticFailed, getStaticStart, getStaticSuccess } from "../slice/staticSlice"


export const getAllStatic= async (id,dispatch) => {
    dispatch(getStaticStart())

    try {
        const res = await axios.get(`http://192.168.43.199:8443/api/v1/shop/${id}/payment`)

        dispatch(getStaticSuccess(res.data))
    } catch (error) {
        dispatch(getStaticFailed())
    }
}

