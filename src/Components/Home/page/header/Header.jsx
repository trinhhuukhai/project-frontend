import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../../../redux/apiRequest'

function Header() {


    const user = useSelector((state) =>state.auth.login?.currentUser) //lay state da tao

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = user?.token

    const handleLogout =()=>{
        logout(dispatch,navigate)
    }
    // debugger
    return (

        <header>
            <h2>
                <label htmlFor="nav-toggle">
                    <span className="las la-bars"></span>
                    Trang quản trị
                </label>
            </h2>

            {/* <div className="search-wrapper">
                <span className="las la-search"></span>
                <input type="search" name="" id="" placeholder="Search here..." />
            </div> */}

            <div className="user-wrapper">
                <img src="" alt="" width="40px" height="40px" />
                <div>
                    <h4>Xin chào:  <span>{user?.username}</span></h4>
                    {/* <small>Super admin</small> */}
                    <Link to="/logout" className='header-logout' onClick={handleLogout}>Đăng xuất</Link>
                </div>
            </div>
        </header>
    )
}

export default Header