import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { gettAllUsers } from '../../redux/apiRequest'
import MainPage from './page/content/MainPage'
import Header from './page/header/Header'
import SideBar from './page/sidebar/SideBar'
import jwt_decode from "jwt-decode"

function HomePage() {

    const user = useSelector((state) => state.auth.login?.currentUser)
    // let token = localStorage.getItem("token")

    const dispatch =useDispatch()
    const navigate = useNavigate()
    let date = new Date()

    if (user) {
        const decodedToken = jwt_decode(user?.token)
        if (decodedToken.exp < date.getTime() / 1000) {
            navigate("/login")
        }
    }


    useEffect(() => {

        if (!user) {
            navigate("/login")
        }
        if (user?.token) {
            gettAllUsers(user?.token, dispatch)
        }
    })

    return (
        <>
            <SideBar />
            <div className="main-content">
                <Header />
                <MainPage />
            </div>
        </>

    )
}

export default HomePage