import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { gettAllCategory } from '../../../../../redux/apis/categoryApi';
import { postProduct } from '../../../../../redux/apis/productApi'
import { addAccount } from '../../../../../redux/apiRequest';

function AddAccount() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const user = useSelector((state) => state.auth.login?.currentUser)

    // const userId = user?.id

    const [name, setName] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [role, setRole] = useState(0);



    const dataRole = [
        { label: 0, value: 'CUSTOMER' },
        { label: 1, value: 'OWNER' },
        { label: 2, value: 'ADMIN' },
      ];

    const handlePost = (e) => {
        e.preventDefault();
        const newAccount = {
            username,
            password,
            name,
            phone,
            email,
            address,
            role,
        };

        addAccount(newAccount, dispatch, navigate)

            debugger
    };
    
    return (
        <main>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h2 className='text-center m-4'>Thêm mới tài khoản</h2>
                        <form action="" method="post" onSubmit={handlePost}>
                            <div className='mb-3'>
                                <label htmlFor='username' className='form-label'>Tên đăng nhập</label>
                                <input type={"text"} className="form-control" placeholder='Tên đăng nhập' name='username' required onChange={(e) => setUserName(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='password' className='form-label'>Mật khẩu</label>
                                <input type={"password"} className="form-control" placeholder='Mật khẩu' name='password' required onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='name' className='form-label'>Họ tên</label>
                                <input type={"text"} className="form-control" placeholder='Họ tên' name='name' required onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='phone' className='form-label'>Số điện thoại</label>
                                <input type={"number"} className="form-control" placeholder='Số điện thoại' name='phone' required onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='email' className='form-label'>Email</label>
                                <input type={"text"} className="form-control" placeholder='Email' name='email' required onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='address' className='form-label'>Địa chỉ</label>
                                <input type={"text"} className="form-control" placeholder='Địa chỉ' name='address' required onChange={(e) => setAddress(e.target.value)} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="disabledSelect" className="form-label">Vai trò</label>
                                <select id="disabledSelect" className="form-select" name='role' required onChange={(e) => setRole(e.target.value)}>

                                    {Array.isArray(dataRole) && dataRole.map((option) => (
                                        <option value={option.label}>{option.value}</option>
                                    ))}

                                </select>
                            </div>

                            <button type='submit' className='btn btn-primary'>Lưu</button>
                            <Link to='/account' className='btn btn-outline-danger mx-2'>Hủy</Link>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AddAccount