import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {  gettAllPayment } from '../../../../../redux/apis/paymentApi';

function Payment() {
  const payment = useSelector((state) => state.payment.payments?.allPayment);

  // debugger
  const dispatch = useDispatch();


  const loadALl = async () => {
    await gettAllPayment(dispatch);
  };

  useEffect(() => {
    loadALl();
  }, []);

  return (
    <main>
      <Link to="/payment/add"><span>Thanh toán</span></Link>
      <div className='conatiner'>
        <div className='py-4'>
          <table className="table border">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Tên khách hàng</th>
                <th scope="col">Địa chỉ</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col">Số tiền</th>
                <th scope="col">Ngày thanh toán</th>
                {/* <th scope="col">Amount</th> */}
              </tr>
            </thead>
            <tbody>
              {
                Array.isArray(payment) && payment.map((pay, index) => (
                  <tr key={index}>
                    <th scope='row'>{index + 1}</th>
                    <td>{pay.order.user.name}</td>
                    <td>{pay.order.user.address}</td>
                    <td>{pay.order.user.phone}</td>
                    <td>{pay.amount}</td>
                    <td>{pay.paymentDate}</td>
                    {/* <td>{pay.amount} VND</td> */}
                    <td>
                      {/* <button className='btn btn-primary mx-2'>Xem chi tiết</button> */}
                      {/* <Link to={`/payment/edit/${pay.id}`} className='btn btn-outline-primary mx-2'>Sửa</Link>
                      <button className='btn btn-danger mx-2' onClick={() => { deleteCus(pay.id) }}>Xóa</button> */}

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

export default Payment