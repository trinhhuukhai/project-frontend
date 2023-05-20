import axios from "axios"
import { getStaticFailed, getStaticStart, getStaticSuccess } from "../slice/staticSlice"

export const getAllStaticInDate = async ( date, dispatch) => {
    dispatch(getStaticStart())
    try  {
        const res = await axios.get(`http://localhost:8080/api/v1/payment/date?date=${date}`)
        // debugger
  
     if(res.data)
        dispatch(getStaticSuccess(res.data))
    } catch (error) {
        dispatch(getStaticFailed())
    }
}

export const getAllStaticRangeDate = async ( startDate, endDate, dispatch) => {
    dispatch(getStaticStart())

    try {
        const res = await axios.get(`http://localhost:8080/api/v1/payment/rangeDate?startDate=${startDate}&endDate=${endDate}`)
        // debugger
        dispatch(getStaticSuccess(res.data))
    } catch (error) {
        dispatch(getStaticFailed())
    }
}


export const getAllStatic= async (choose,dispatch) => {
    dispatch(getStaticStart())

    try {
        const res = await axios.get(`http://localhost:8080/api/v1/payment/${choose}`)

        dispatch(getStaticSuccess(res.data))
    } catch (error) {
        dispatch(getStaticFailed())
    }
}

