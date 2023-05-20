import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { gettAllUsers } from '../../../../redux/apiRequest'

function MainPage() {

    // const user =useSelector((state) => state.auth.login?.currentUser)
    // const dispatch = useDispatch()

    // const userDate = []

    // useEffect(() =>{
    //     gettAllUsers(user?.token, dispatch)
    // },[])

    return (
        <main>
            <div className="cards">
                <div className="card-single">
                    <h1>54</h1>
                    <span>Khách hàng</span>
                    <div><span className="las la-users"></span></div>
                </div>

                <div className="card-single">
                    <h1>54</h1>
                    <span>Đơn hàng</span>
                    <div><span className="las la-shopping-bag"></span></div>
                </div>

            </div>

            <div className="recent-grid">
                <div className="customers">
                    <div className="card">
                        <div className="card-header">
                            <h3>New Customer</h3>
                            <button>See all <span className="las la-arrow-right"></span></button>
                        </div>
                        <div className="card-body">
                            <div className="customer">
                                <div className="info">
                                    <img src="" alt="" width="40px" height="40px" />
                                        <div>
                                            <h4>Khai</h4>
                                            <small>CEO Excerp</small>
                                        </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainPage