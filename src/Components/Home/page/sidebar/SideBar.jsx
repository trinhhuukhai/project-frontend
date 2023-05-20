import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function SideBar() {
    const location = useLocation();
    const [activeItem, setActiveItem] = useState('');

    const handleClick = (event) => {
        setActiveItem(event.target.id);
    };
    return (
        <>
            <input type="checkbox" name="" id="nav-toggle" />
            <div className="sidebar">
                <div className="sidebar-brand">
                    <h2><span className="lab la-accusoft"></span><span>K-Shop</span></h2>
                </div>

                <div className="sidebar-menu">
                    <ul>
                        <li>
                            <Link to="/" id="dashboard" className={location.pathname === '/' ? 'active' : ''} onClick={handleClick}>
                                <span className="las la-igloo"></span><span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/customer" id="customer" className={location.pathname.startsWith('/customer') ? 'active' : ''} onClick={handleClick}>
                                <span className="las la-users"></span><span>Customer</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/category" id="category" className={location.pathname.startsWith('/category') ? 'active' : ''} onClick={handleClick}>
                                <span className="las la-users"></span><span>Category</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/product" id="product" className={location.pathname.startsWith('/product') ? 'active' : ''} onClick={handleClick}>
                                <span className="las la-users"></span><span>Product</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/shipping" id="shipping" className={location.pathname.startsWith('/shipping') ? 'active' : ''} onClick={handleClick}>
                                <span className="las la-users"></span><span>Shipping</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/payment" id="payment" className={location.pathname.startsWith('/payment') ? 'active' : ''} onClick={handleClick}>
                                <span className="las la-users"></span><span>Payment</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/status" id="status" className={location.pathname.startsWith('/status') ? 'active' : ''} onClick={handleClick}>
                                <span className="las la-users"></span><span>Status</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/order" id="order" className={location.pathname.startsWith('/order') ? 'active' : ''} onClick={handleClick}>
                                <span className="las la-users"></span><span>Order</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/review" id="review" className={location.pathname.startsWith('/review') ? 'active' : ''} onClick={handleClick}>
                                <span className="las la-users"></span><span>Review</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/static" id="static" className={location.pathname.startsWith('/static') ? 'active' : ''} onClick={handleClick}>
                                <span className="las la-users"></span><span>Statistical</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/account" id="account" className={location.pathname.startsWith('/account') ? 'active' : ''} onClick={handleClick}>
                                <span className="las la-users"></span><span>Account</span>
                            </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SideBar