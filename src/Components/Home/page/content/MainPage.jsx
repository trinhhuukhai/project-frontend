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
                    <span>Customers</span>
                    <div><span className="las la-users"></span></div>
                </div>

                <div className="card-single">
                    <h1>79</h1>
                    <span>Projects</span>
                    <div><span className="las la-clipboard-list"></span></div>
                </div>

                <div className="card-single">
                    <h1>54</h1>
                    <span>Order</span>
                    <div><span className="las la-shopping-bag"></span></div>
                </div>

                <div className="card-single">
                    <h1>54</h1>
                    <span>Inventory</span>
                    <div><span className="las la-receipt"></span></div>
                </div>
            </div>

            <div className="recent-grid">
                <div className="projects">
                    <div className="card">
                        <div className="card-header">
                            <h2>Recent Projects</h2>
                            <button>See all <span className="las la-arrow-right"></span></button>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table width="100%">
                                    <thead>
                                        <tr>
                                            <td>Project title</td>
                                            <td>Department</td>
                                            <td>Status</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>UI/UX Deg</td>
                                            <td>UI team</td>
                                            <td><span className="status purple"></span>review</td>
                                        </tr>
                                        <tr>
                                            <td>Web developer</td>
                                            <td>Frontend</td>
                                            <td><span className="status orange"></span>In progess</td>
                                        </tr>
                                        <tr>
                                            <td>Ushop App</td>
                                            <td>Mobile Team</td>
                                            <td><span className="status pink"></span>pending</td>
                                        </tr>
                                        <tr>
                                            <td>UI/UX Deg</td>
                                            <td>UI team</td>
                                            <td><span className="status purple"></span>review</td>
                                        </tr>
                                        <tr>
                                            <td>Web developer</td>
                                            <td>Frontend</td>
                                            <td><span className="status orange"></span>In progess</td>
                                        </tr>
                                        <tr>
                                            <td>Ushop App</td>
                                            <td>Mobile Team</td>
                                            <td><span className="status pink"></span>pending</td>
                                        </tr>
                                        <tr>
                                            <td>UI/UX Deg</td>
                                            <td>UI team</td>
                                            <td><span className="status purple"></span>review</td>
                                        </tr>
                                        <tr>
                                            <td>Web developer</td>
                                            <td>Frontend</td>
                                            <td><span className="status orange"></span>In progess</td>
                                        </tr>
                                        <tr>
                                            <td>Ushop App</td>
                                            <td>Mobile Team</td>
                                            <td><span className="status pink"></span>pending</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
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
                                <div className="contact">
                                    <span className="las la-user-circle"></span>
                                    <span className="las la-comment"></span>
                                    <span className="las la-phone"></span>
                                </div>
                            </div>
                            <div className="customer">
                                <div className="info">
                                    <img src="" alt="" width="40px" height="40px" />
                                        <div>
                                            <h4>Khai</h4>
                                            <small>CEO Excerp</small>
                                        </div>
                                </div>
                                <div className="contact">
                                    <span className="las la-user-circle"></span>
                                    <span className="las la-comment"></span>
                                    <span className="las la-phone"></span>
                                </div>
                            </div>
                            <div className="customer">
                                <div className="info">
                                    <img src="" alt="" width="40px" height="40px" />
                                        <div>
                                            <h4>Khai</h4>
                                            <small>CEO Excerp</small>
                                        </div>
                                </div>
                                <div className="contact">
                                    <span className="las la-user-circle"></span>
                                    <span className="las la-comment"></span>
                                    <span className="las la-phone"></span>
                                </div>
                            </div>
                            <div className="customer">
                                <div className="info">
                                    <img src="" alt="" width="40px" height="40px" />
                                        <div>
                                            <h4>Khai</h4>
                                            <small>CEO Excerp</small>
                                        </div>
                                </div>
                                <div className="contact">
                                    <span className="las la-user-circle"></span>
                                    <span className="las la-comment"></span>
                                    <span className="las la-phone"></span>
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