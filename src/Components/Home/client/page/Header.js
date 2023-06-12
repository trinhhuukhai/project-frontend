import React from 'react'
import "./Header.css"
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../../../redux/apiRequest'
function Header() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        logout(dispatch, navigate)
    }

    const user = useSelector((state) => state.auth.login?.currentUser)
    var coin = user.coin
    // debugger

    return (
        <section className='header'>
            <div>
                <h1>
                    <Link to={"/client"} className="logo">K- Shop</Link>
                </h1>
            </div>
            <div className='header-links'>
                <ul>
                    <li><Link to={"/client/cart"} className="cart"><i className='fas fa-shopping-cart me-1' /> Giỏ hàng</Link></li>
                    {/* <li><Link to={"/client/coin"} className="coin"><i className='fas fa-dollar-sign me-1' />{coin} Coin</Link></li> */}
                    <li><Link to={"/client/order"} className="order"><i className="fa fa-shopping-bag" /> Đơn hàng</Link></li>
                    <li><Link to="/logout" className='header-logout' onClick={handleLogout}>Đăng xuất</Link></li>

                </ul>
            </div>
        </section>
    )
}

export default Header
