import React from 'react'

function SideBar() {
    return (
        <>
            <input type="checkbox" name="" id="nav-toggle" />
            <div className="sidebar">
                <div className="sidebar-brand">
                    <h2><span className="lab la-accusoft"></span><span>Accusoft</span></h2>
                </div>

                <div className="sidebar-menu">
                    <ul>
                        <li><a href="" className="active"><span className="las la-igloo"></span><span>Dashboard</span></a></li>
                        <li><a href=""><span className="las la-users"></span><span>Customer</span></a></li>
                        <li><a href=""><span className="las la-clipboard-list"></span><span>Projects</span></a></li>
                        <li><a href=""><span className="las la-shopping-bag"></span><span>Order</span></a></li>
                        <li><a href=""><span className="las la-receipt"></span><span>Inventory</span></a></li>
                        <li><a href=""><span className="las la-user-circle"></span><span>Account</span></a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SideBar