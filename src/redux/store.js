//chua toan bo reducer redux toolkit = su dung state bat ki noi nao
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import authReducer from "./authSlice"
import userReducer from "./userSlice"
import customerReducer from "./slice/customerSlice"
import categoryReducer from "./slice/categorySlice"
import productReducer from "./slice/productSlice"
import shippingReducer from "./slice/shippingSlice"
import paymentReducer from "./slice/paymentSlice"
import statusReducer from "./slice/statusSlice"
import reviewReducer from "./slice/reviewSlice"
import orderReducer from "./slice/orderSlice"

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    customer: customerReducer,
    category: categoryReducer,
    product: productReducer,
    shipping: shippingReducer,
    order: orderReducer,
    payment: paymentReducer,
    status: statusReducer,
    review: reviewReducer,

})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)


