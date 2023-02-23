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
            <h1>Login</h1>
            <form action="" method="post" onSubmit={handldeLogin}>
                <div className="txt-field">
                    <input type="text" name="" id="" required onChange={(e) => setUsername(e.target.value)} />
                        <span></span>
                        <label htmlFor="">Username</label>
                </div>
                <div className="txt-field">
                    <input type="password" name="" id="" required onChange={(e) => setPassword(e.target.value)} />
                        <span></span>
                        <label htmlFor="">Password</label>
                </div>
               
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login