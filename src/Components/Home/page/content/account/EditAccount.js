import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { editShipping, getIdShipping } from '../../../../../redux/apis/shippingApi'
import { editUser, getUserbyid } from '../../../../../redux/apiRequest'

function EditAccount() {

      const dispatch = useDispatch()
      const navigate = useNavigate()
      
      const { id } = useParams()
      
      useEffect(() => {
        getUserbyid(id, dispatch)
      }, [id, dispatch])
      
      const data = useSelector(state => state.auth.login?.getUserById)
      
      
      useEffect(() => {
        if (data) {
          setAcc(data.data)
        }
      }, [data])

      const [acc, setAcc] = useState({
        name: "",
        address: "",
        phone: "",
        email: ""
      })
      const { name, address,phone ,email} = acc
      
      const onInputChange = (e) => {
        setAcc({ ...acc, [e.target.name]: e.target.value })
      }
      
      const handlePost = (e) => {
        e.preventDefault()
        editUser(id,acc,dispatch,navigate)
      }


    return (
        <main>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h2 className='text-center m-4'>Sửa thông tin tài khoản</h2>
                        <form action="" method="post" onSubmit={(e) => handlePost(e)}>
                            <div className='mb-3'>
                                <label htmlFor='name' className='form-label'>Họ tên</label>
                                <input type={"text"} className="form-control" placeholder='Nhập họ tên' value={name} name='name' required onChange={(e) => onInputChange(e)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='address' className='form-label'>Địa chỉ</label>
                                <input type={"text"} className="form-control" placeholder=' Nhập địa chỉ' value={address} name='address' required onChange={(e) => onInputChange(e)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='phone' className='form-label'>Số điện thoại</label>
                                <input type={"text"} className="form-control" placeholder='Nhập số điện thoại' value={phone} name='phone' required onChange={(e) => onInputChange(e)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='email' className='form-label'>Email</label>
                                <input type={"email"} className="form-control" placeholder='Nhập email' value={email} name='email' required onChange={(e) => onInputChange(e)} />
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

export default EditAccount