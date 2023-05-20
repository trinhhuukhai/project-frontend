import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from '../../redux/apiRequest';
import "./login.css";
function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    // const msg = useSelector((state) => state.auth.login.msg)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector((state) => state.auth.login?.currentUser)
    // debugger

    const handldeLogin = (e)=>{
        e.preventDefault()
        const newUser ={
            username: username,
            password: password
        }
        loginUser(newUser,dispatch, navigate)
    }

    return (
        <div className="center">
            <h1>Đăng nhập</h1>
            <form action="" method="post" onSubmit={handldeLogin}>
                <div className="txt-field">
                    <input type="text" name="username" id="username" required onChange={(e) => setUsername(e.target.value)} />
                        <span></span>
                        <label htmlFor="">Tên đăng nhập</label>
                </div>
                <div className="txt-field">
                    <input type="password" name="password" id="password" required onChange={(e) => setPassword(e.target.value)} />
                        <span></span>
                        <label htmlFor="">Mật khẩu</label>
                </div>
               {user && <p>{user.message}</p>}
                <input type="submit" value="Login" />
                <Link to="/register">Register</Link>
            </form>
        </div>
    )
}

export default Login