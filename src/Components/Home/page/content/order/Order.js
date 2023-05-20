import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { UpdateStatusOrder, gettAllOrder } from '../../../../../redux/apis/orderApi';
import { deleteReview, gettAllReview } from '../../../../../redux/apis/reviewApi';
import { convertMoney } from '../../../../../until/Validations';


function Order() {

  const shopId = useSelector((state) => state.auth.login?.currentUser.shopId);



  const order = useSelector((state) => state.order?.allOrder.data);
  // debugger
  const id = localStorage.getItem("id")

  const dispatch = useDispatch()

  useEffect(() => {
    loadALl();
  }, []);
  const deleteCus = async (id) => {
    await deleteReview(id, dispatch);
    loadALl();
  };

  const loadALl = async () => {
    await gettAllOrder(shopId, dispatch)
  };

  const updateStatus = async (Oid) => {
    await UpdateStatusOrder(Oid, dispatch)
    loadALl()
  }

  return (
    <main>
      <div className='conatiner'>
        <div className='py-4'>
          <table className="table border">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Tên khách hàng</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col">Email</th>
                <th scope="col">Địa chỉ</th>
                <th scope="col">Ngày đặt hàng</th>

                <th scope="col">Tổng tiền</th>
                <th scope="col">Trạng thái đơn hàng</th>
                <th scope="col">Thanh toán</th>
                <th scope="col">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {
                Array.isArray(order) && order.map((rev, index) => (
                  <tr key={index}>
                    <th scope='row'>{index + 1}</th>
                    <td>{rev.order.user.name}</td>
                    <td>{rev.order.user.phone}</td>
                    <td>{rev.order.user.email}</td>
                    <td>{rev.order.user.address}</td>
                    <td>{rev.orderDate}</td>

                    <td>{rev.total} VND</td>
                    <td>{rev.status}</td>
                    <td>{rev.paymentStatus}</td>
                    <td>
                      <Link to={`/order/${rev.id}/orderItem`} className='btn btn-outline-primary mx-2'>Xem chi tiết đơn hàng</Link>
                      {rev.status === "Đang xử lý" ? (
                        // If rev.status is "Đã xác nhận", disable the button
                        <button className='btn' >
                          Xác nhận đơn hàng
                        </button>
                      ) : (
                        // If rev.status is not "Đã xác nhận", enable the button and call the updateStatus function on click
                        <button className='btn btn-outline-primary mx-2'
                          disabled={rev.paymentStatus == 'Hoàn tiền' || rev.paymentStatus == "Chưa thanh toán" || rev.status == "Đã xác nhận" ? true : false}
                          onClick={() => updateStatus(rev.id)}>
                          Hoàn tiền
                        </button>
                      )}                    </td>
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

export default Order