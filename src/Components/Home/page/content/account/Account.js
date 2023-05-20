import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { deleteShipping, gettAllShipping } from '../../../../../redux/apis/shippingApi';
import { gettAllUsers } from '../../../../../redux/apiRequest';

function Account() {
  const account = useSelector((state) => state.user.users?.allUsers);
  
  const dispatch = useDispatch();

  let token = localStorage.getItem("token")

  const deleteCus = async (id) => {
    await deleteShipping(id, dispatch);
    loadALl();
  };

  const loadALl = async () => {
    await gettAllUsers(token,dispatch);
  };

  useEffect(() => {
    loadALl();
  }, []);

  return (
    <main>
      <Link to="/account/add"><span>Thêm tài khoản</span></Link>
      <div className='conatiner'>
        <div className='py-4'>
          <table className="table border">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Họ tên</th>
                <th scope="col">Tên đăng nhập</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col">Email</th>
                <th scope="col">Địa chỉ</th>
                <th scope="col">Vai trò</th>

                <th scope="col">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {
                Array.isArray(account) && account.map((acc, index) => (
                  <tr key={index}>
                    <th scope='row'>{index + 1}</th>
                    <td>{acc.name}</td>
                    <td>{acc.username}</td>
                    <td>{acc.phone}</td>
                    <td>{acc.email}</td>
                    <td>{acc.address}</td>
                    <td>{acc.role}</td>
                    <td>
                      <button className='btn btn-primary mx-2'>Xem chi tiết</button>
                      <Link to={`/account/edit/${acc.id}`} className='btn btn-outline-primary mx-2'>Sửa</Link>
                      <button className='btn btn-danger mx-2' onClick={() => { deleteCus(acc.id) }}>Xóa</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>


    </main>

  )
}

export default Account