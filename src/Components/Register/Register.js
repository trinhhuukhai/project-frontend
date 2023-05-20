import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Register.css";
import { useDispatch } from 'react-redux';
import { register } from '../../redux/apiRequest';

function Register() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  const [role, setRole] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handldeRegister = (e)=>{
    e.preventDefault();
    if (repassword !== password) {
        alert("Mật khẩu nhập lại không đúng!!");
        return;
    }
    const newUser ={
        name: name,
        username: username,
        password: password,
        role: 0,
        address: address,
        phone: phone,
        email: email
    }
    register(newUser, dispatch, navigate);
}


  return (
    <div className='register'>
      <form action="" method="post" onSubmit={handldeRegister}>
      <h2>Đăng ký tài khoản</h2>

        <div>
          <label htmlFor="name">Họ tên:</label>
          <input type="text" id="name" value={name} required onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="username">Tên đăng nhập:</label>
          <input type="text" id="username" value={username} required onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Mật khẩu:</label>
          <input type="password" id="password" value={password} required onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Nhập lại mật khẩu:</label>
          <input type="password" id="repassword" value={repassword} required onChange={(e) => setRePassword(e.target.value)} />
        </div>
        {/* <div>
          <label htmlFor="role">Role:</label>
          <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value=""></option>
            <option value="1">Admin</option>
            <option value="0">User</option>
          </select>
        </div> */}
        <div>
          <label htmlFor="address">Địa chỉ:</label>
          <input type="text" id="address" value={address} required onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div>
          <label htmlFor="phone">Số điện thoại:</label>
          <input type="text" id="phone" value={phone} required onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email}  required onChange={(e) => setEmail(e.target.value)} />
        </div>
        <input type="submit" value="Đăng ký" />
        <Link to="/login">Đăng nhập</Link>
      </form>
    </div>
  )
}

export default Register;
