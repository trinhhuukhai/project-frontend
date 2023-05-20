import {createSlice} from "@reduxjs/toolkit"

const categorySLice = createSlice({
    name:"category",
    initialState:{
        categorys:{
            allCategory:null,
            isFetching:false,
            error:false,
            postCategory:false,
            editCategory:false,
            getIdCategory:null,
            deleteCategory:false,
            getProductinCategory:null,

        },
    },
    reducers:{
        getCategoryStart:(state) =>{
            state.categorys.isFetching = true
        },
        getCategorySuccess:(state, action) =>{
            state.categorys.isFetching = false
            state.categorys.allCategory = action.payload
        },
        getCategoryFailed: (state) =>{
            state.categorys.isFetching = false
            state.categorys.error = true
        },
        postCategoryStart: (state) =>{
            state.categorys.isFetching = true
        },
        postCategorySuccess: (state, action) =>{
            state.categorys.isFetching = false
            state.categorys.postCategory = action.payload
        },
        postCategoryFailed: (state) =>{
            state.categorys.isFetching = false
            state.categorys.error = true
        },
        editCategoryStart: (state) =>{
            state.categorys.isFetching = true
        },
        editCategorySuccess: (state, action) =>{
            state.categorys.isFetching = false
            state.categorys.editCategory = action.payload
        },
        editCategoryFailed: (state) =>{
            state.categorys.isFetching = false
            state.categorys.error = true
        },
        getIdCategoryStart: (state) =>{
            state.categorys.isFetching = true
        },
        getIdCategorySuccess: (state, action) =>{
            state.categorys.isFetching = false
            state.categorys.getIdCategory = action.payload
        },
        getIdCategoryFailed: (state) =>{
            state.categorys.isFetching = false
            state.categorys.error = true
        },

        deleteCategoryStart: (state) =>{
            state.categorys.isFetching = true
        },
        deleteCategorySuccess: (state, action) =>{
            state.categorys.isFetching = false
            state.categorys.deleteCategory = action.payload
        },
        deleteCategoryFailed: (state) =>{
            state.categorys.isFetching = false
            state.categorys.error = true
        },
        getProductCategoryStart:(state) =>{
            state.categorys.isFetching = true
        },
        getProductCategorySuccess:(state, action) =>{
            state.categorys.isFetching = false
            state.categorys.getProductinCategory = action.payload
        },
        getProductCategoryFailed: (state) =>{
            state.categorys.isFetching = false
            state.categorys.error = true
        },

    }
})

export const{
    getCategoryStart,
    getCategorySuccess,
    getCategoryFailed,
    postCategoryStart,
    postCategorySuccess,
    postCategoryFailed,
    editCategoryStart,
    editCategorySuccess,
    editCategoryFailed,
    getIdCategoryStart,
    getIdCategorySuccess,
    getIdCategoryFailed,
    deleteCategoryStart,
    deleteCategorySuccess,
    deleteCategoryFailed,
    getProductCategoryStart,
    getProductCategorySuccess,
    getProductCategoryFailed
} = categorySLice.actions;

export default categorySLice.reducer