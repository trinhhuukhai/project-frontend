import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, useNavigate, Routes } from 'react-router-dom'
import MainPage from './page/content/MainPage'
import Header from './page/header/Header'
import SideBar from './page/sidebar/SideBar'
import jwt_decode from "jwt-decode"
import Customer from './page/content/customer/Customer'
import AddCustomer from './page/content/customer/AddCustomer'
import EditCustomer from './page/content/customer/EditCustomer'
import Category from './page/content/category/Category'
import AddCategory from './page/content/category/AddCategory'
import EditCategory from './page/content/category/EditCategory'
import Product from './page/content/products/Product'
import EditProduct from './page/content/products/EditProduct'
import AddProduct from './page/content/products/AddProduct'
import Shipping from './page/content/ship/Shipping'
import AddShip from './page/content/ship/AddShip'
import EditShip from './page/content/ship/EditShip'
import Payment from './page/content/payment/Payment'
import AddPayment from './page/content/payment/AddPayment'
import EditPayment from './page/content/payment/EditPayment'
import Status from './page/content/status/Status'
import AddStatus from './page/content/status/AddStatus'
import EditStatus from './page/content/status/EditStatus'
import Review from './page/content/review/Review'
import AddReview from './page/content/review/AddReview'
import EditReview from './page/content/review/EditReview'
import Order from './page/content/order/Order'
import OrderItem from './page/content/order/OrderItem'
import EditOrder from './page/content/order/EditOrder'
import Statistical from './page/content/statistical/Statistical'
import ProductDetail from './page/content/products/ProductDetail'
import AddProductImage from './page/content/products/AddProductImage'
import OrderOfCustomer from './page/content/customer/OrderOfCustomer'
import OrderDetailCustomer from './page/content/customer/OrderDetailCustomer'
import { getInfoUser } from '../../redux/apiRequest'
import Account from './page/content/account/Account'
import AddAccount from './page/content/account/AddAccount'
import EditAccount from './page/content/account/EditAccount'

function HomePage() {
    const id = localStorage.getItem("id")

    useEffect(() => {
        getInfoUser(id, dispatch)
    }, [])


    const user = useSelector((state) => state.auth.login?.currentUser)
    const status = useSelector((state) => state.auth.login?.error)
    // let token = localStorage.getItem("token")

    // const dispatch = useDispatch()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const token = user?.token
    const role = user?.roleName
    

    console.log(token)
    let date = new Date()



    // useEffect(() => {
    //     if (!user || status === true || !token || role !== "OWNER") {
    //         navigate("/login")
    //     } 
        
    //     if (user) {
    //         const decodedToken = jwt_decode(user?.token)
    //         if (decodedToken.exp < date.getTime() / 1000) {
    //             navigate("/login")
    //         }
    //     }
    // }, [])

    return (
        <>
            <SideBar />
            <div className="main-content">
                <Header />
                <Routes>
                    {/* <Route path="/" element={<MainPage />} /> */}
                    <Route path="/customer" element={<Customer />} />
                    <Route path="/customer/:id/order" element={<OrderOfCustomer />} />
                    <Route path="/customer/:id/orderDetail" element={<OrderDetailCustomer />} />

                    <Route path="/customer/edit/:id" element={<EditCustomer />} />

                    <Route path="/category" element={<Category />} />
                    <Route path="/category/add" element={<AddCategory />} />
                    <Route path="/category/edit/:id" element={<EditCategory />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/product/detail/:id" element={<ProductDetail />} />
                    <Route path="/product/add-image/:id" element={<AddProductImage />} />
                    <Route path="/product/add-review/:id" element={<AddReview />} />
                    <Route path="/product/review/edit/:id" element={<EditReview />} />
                    <Route path="/product/add" element={<AddProduct />} />
                    <Route path="/product/edit/:id" element={<EditProduct />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/account/add" element={<AddAccount />} />
                    <Route path="/account/edit/:id" element={<EditAccount />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/payment/add" element={<AddPayment />} />
                    <Route path="/payment/edit/:id" element={<EditPayment />} />
                    <Route path="/status" element={<Status />} />
                    <Route path="/status/add" element={<AddStatus />} />
                    <Route path="/status/edit/:id" element={<EditStatus />} />
                    <Route path="/review" element={<Review />} />
                    <Route path="/review/add" element={<AddReview />} />
                    <Route path="/review/edit/:id" element={<EditReview />} />
                    <Route path="/order" element={<Order />} />
                    <Route path="/order/add" element={<AddReview />} />
                    <Route path="/order/edit/:id" element={<EditOrder />} />
                    <Route path="/order/:id/orderItem" element={<OrderItem />} />
                    <Route path="/static" element={<Statistical />} />
                    {/* <Route path="/sale" element={<ProductSale />} /> */}


                </Routes>
            </div>
        </>

    )
}

export default HomePage