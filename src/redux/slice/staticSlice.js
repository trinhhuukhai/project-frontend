import { createSlice } from "@reduxjs/toolkit"

const staticSlice = createSlice({
    name: "static",
    initialState: {

        allStatic: null,
        isFetching: false,
        error: false,

    },
    reducers: {
        getStaticStart: (state) => {
            state.isFetching = true
        },
        getStaticSuccess: (state, action) => {
            state.isFetching = false
            state.allStatic = action.payload
        },
        getStaticFailed: (state) => {
            state.isFetching = false
            state.error = true
        }
    }
})

export const {
    getStaticStart,
    getStaticSuccess,
    getStaticFailed,
} = staticSlice.actions;

export default staticSlice.reducer