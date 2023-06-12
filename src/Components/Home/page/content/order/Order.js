import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { UpdateStatusOrder, confirmOrder, gettAllOrder, refundOrder } from '../../../../../redux/apis/orderApi';
import { deleteReview } from '../../../../../redux/apis/reviewApi';
import moment from 'moment/moment';


function Order() {
  const shopId = useSelector((state) => state.auth.login?.currentUser.shopId);
  const order = useSelector((state) => state.order?.allOrder.data);
  const id = localStorage.getItem('id');
  const dispatch = useDispatch();
  const [status, setStatus] = useState("Hoàn tiền")

  useEffect(() => {
    loadALl();
  }, []);

  const loadALl = async () => {
    await gettAllOrder(shopId, dispatch);
  };

  const updateStatus = async (Oid) => {
    await UpdateStatusOrder(Oid, dispatch);
    loadALl();
  };

  const confirm = async (Oid) => {
    const newStatus = {
      status: 'Đã xác nhận',
    };
    await confirmOrder(Oid, dispatch, newStatus);
    loadALl();
  };

  const refund = async (Oid) => {
    await refundOrder(Oid, dispatch, status);
    loadALl();
  };

  const formattedAmount = (amount) => {
    if (amount) {
      return amount.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
      });
    }
    return '0 đ';
  };

  const formattedDate = (originalDate) => moment(originalDate).format('DD-MM-YYYY');


  return (
    <main>
      <div className="conatiner">
        <div className="py-4">
          <table className="table border">
            <thead>
              <tr>
                <th scope="col">STT</th>
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
              {Array.isArray(order) &&
                order.map((rev, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{rev.order.user.name}</td>
                    <td>{rev.order.user.phone}</td>
                    <td>{rev.order.user.email}</td>
                    <td>{rev.order.user.address}</td>
                    <td>{formattedDate(rev.orderDate)}</td>
                    <td>{formattedAmount(rev.total)}</td>
                    <td>{rev.status}</td>
                    <td>{rev.paymentStatus}</td>
                    <td>
                      <Link to={`/order/${rev.id}/orderItem`} className="btn btn-outline-primary mx-2">
                        Xem chi tiết đơn hàng
                      </Link>
                      {rev.status === 'Đang xử lý' ? (
                        <button className="btn btn-outline-primary mx-2" onClick={() => confirm(rev.id)}>
                          Xác nhận đơn hàng
                        </button>
                      ) : (
                        <button
                          className="btn btn-outline-primary mx-2"
                          disabled={rev.paymentStatus === 'Hoàn tiền' || rev.paymentStatus === 'Chưa thanh toán' || rev.status === 'Đã xác nhận'}
                          onClick={() => refund(rev.id)}
                        >
                          Hoàn tiền
                        </button>
                      )}
                      
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default Order;
