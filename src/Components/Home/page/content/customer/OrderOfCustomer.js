import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ChangeStatus, getOrderItemByUserId } from '../../../../../redux/apis/orderApi';
import { Link, useParams } from 'react-router-dom';
import { convertMoney } from '../../../../../until/Validations';

function OrderOfCustomer() {

  const order = useSelector((state) => state.order?.getOrderByUser.data);
  const { id } = useParams()

  const dispatch = useDispatch();

  const loadALl = async () => {
    await getOrderItemByUserId(id, dispatch);
  };

  useEffect(() => {
    loadALl();
  }, []);

  return (
    <main>
      <div className='container'>
        <div>
          <table className="table border">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Tên khách hàng</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col">Email</th>
                <th scope="col">Địa chỉ</th>
                <th scope="col">Ngày đặt hàng</th>
                <th scope="col">Tiền đơn hàng</th>
                <th scope="col">Thuế</th>
                <th scope="col">Tổng tiền</th>
                <th scope="col">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {
                Array.isArray(order) && order.map((rev, index) => (
                  <tr key={index}>
                    <th scope='row'>{index + 1}</th>
                    <td>{rev.user.name}</td>
                    <td>{rev.user.phone}</td>
                    <td>{rev.user.email}</td>
                    <td>{rev.user.address}</td>
                    <td>{rev.orderDate}</td>
                    <td>{rev.total} VND</td>
                    <td>{rev.tax} VND</td>
                    <td>{rev.billInvoice} VND</td>
                    <td>
                      <Link to={`/customer/${rev.id}/orderDetail`} className='btn btn-outline-primary mx-2'>Xem chi tiết đơn hàng</Link>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <Link to={`/customer`} className='btn btn-primary mx-2'>Trở về</Link>

      </div>
    </main>

  )
}

export default OrderOfCustomer
