import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function SideBar() {
    const location = useLocation();
    const [activeItem, setActiveItem] = useState('');
    const role = localStorage.getItem("role")

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
                    {role === "ADMIN" && (
                        <ul>
                            <li>
                                <Link
                                    to="/category"
                                    id="category"
                                    className={
                                        location.pathname.startsWith('/category') ? 'active' : ''
                                    }
                                    onClick={handleClick}
                                >
                                    <span><i className="fas fal fa-bars"></i></span><span>Danh mục</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/account"
                                    id="account"
                                    className={ location.pathname.startsWith('/account') ? 'active' : ''}
                                    onClick={handleClick}
                                >
                                    <span className="las la-users"></span><span>Tài khoản</span>
                                </Link>
                            </li>
                        </ul>
                    )}
                    {role === "OWNER" && (
                        <ul>
                            <li>
                                <Link
                                    to="/customer"
                                    id="customer"
                                    className={
                                        location.pathname.startsWith('/customer') ? 'active' : ''
                                    }
                                    onClick={handleClick}
                                >
                                    <span className="las la-users"></span><span>Khách hàng</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/product"
                                    id="product"
                                    className={
                                        location.pathname.startsWith('/product') ? 'active' : ''
                                    }
                                    onClick={handleClick}
                                >
                                    <span><i className="fas fal fa-boxes"></i></span><span>Sản phẩm</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/order"
                                    id="order"
                                    className={location.pathname.startsWith('/order') ? 'active' : ''}
                                    onClick={handleClick}
                                >
                                    <span><i className="fas far fa-shopping-bag"></i></span><span>Đơn hàng</span>
                                </Link>
                            </li>
                            {/* <li>
                                <Link
                                    to="/review"
                                    id="review"
                                    className={
                                        location.pathname.startsWith('/review') ? 'active' : ''
                                    }
                                    onClick={handleClick}
                                >
                                    <span><i className="fas far fa-comments"></i></span><span>Đánh giá sản phẩm</span>
                                </Link>
                            </li> */}
                            <li>
                                <Link
                                    to="/static"
                                    id="static"
                                    className={location.pathname.startsWith('/static') ? 'active' : ''}
                                    onClick={handleClick}
                                >
                                    <span><i className="fas fal fa-chart-bar"></i></span><span>Thống kê doanh thu</span>
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>

            </div>
        </>
    )
}

export default SideBar