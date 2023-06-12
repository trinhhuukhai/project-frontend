import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { deleteShipping, gettAllShipping } from '../../../../../redux/apis/shippingApi';
import { deleteAccount, gettAllUsers } from '../../../../../redux/apiRequest';

function Account() {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const account = useSelector((state) => state.user.users?.allUsers);
  const dispatch = useDispatch();

  let token = localStorage.getItem("token")


  useEffect(() => {
    loadALl();
  }, []);

  useEffect(() => {
    const results = account.filter(acc => acc.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results);
  }, [searchTerm, account]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const deleteAcc = async (id) => {
    await deleteAccount(id, token, dispatch);
    loadALl();
  };

  const loadALl = async () => {
    await gettAllUsers(token, dispatch);
  };



  return (
    <main>
      <Link to="/account/add"><span>Thêm tài khoản</span></Link>
      <div className='conatiner'>
        <div className='py-4'>


        

          <div className="search-bar mb-4 d-flex align-items-center">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Tìm kiếm tài khoản..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="btn btn-primary" type="button">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <table className="table border">
            <thead>
              <tr>
                <th scope="col">STT</th>
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
                (searchResults.length > 0 ? searchResults : account).map((acc, index) => (
                  <tr key={index}>
                    <th scope='row'>{index + 1}</th>
                    <td>{acc.name}</td>
                    <td>{acc.username}</td>
                    <td>{acc.phone}</td>
                    <td>{acc.email}</td>
                    <td>{acc.address}</td>
                    <td>{acc.role}</td>
                    <td>
                      {/* <button className='btn btn-primary mx-2'>Xem chi tiết</button> */}
                      <Link to={`/account/edit/${acc.id}`} className='btn btn-primary mx-2'>Sửa</Link>
                      <button className='btn btn-danger mx-2' onClick={() => { deleteAcc(acc.id) }}>Xóa</button>
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