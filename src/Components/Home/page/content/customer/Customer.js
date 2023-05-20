import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { deleteCustomer, gettAllCustomer } from '../../../../../redux/apis/customerApi'

function Customer() {

  const shopId = useSelector((state) => state.auth.login?.currentUser.shopId);
  
  const customer = useSelector((state) => state.customer.customers?.allCustomer.data);

  const id = localStorage.getItem("id")

  const dispatch = useDispatch();

  const deleteCus = async (id) => {
    await deleteCustomer(id, dispatch);
    loadALl();
  };

  const loadALl = async () => {
    await gettAllCustomer(shopId, dispatch);
  };

  useEffect(() => {
    loadALl();
  }, []);

  return (
    <main>
      {/* <Link to="/customer/add"><span>Add customer</span></Link> */}
      <div className='conatiner'>
        <div className='py-4'>
          <table className="table border">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Tên khách hàng</th>
                <th scope="col">Email</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col">Địa chỉ</th>
                <th scope="col">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {
                Array.isArray(customer) && customer.map((cus, index) => (
                  <tr key={index}>
                    <th scope='row'>{index + 1}</th>
                    <td>{cus.customerName}</td>
                    <td>{cus.email}</td>
                    <td>{cus.phone}</td>
                    <td>{cus.address}</td>
                    <td>
                    
                      <button className='btn btn-danger mx-2' onClick={() => { deleteCus(cus.id) }}>Xóa</button>

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

export default Customer