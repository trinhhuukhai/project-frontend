import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ChangeStatus, getOrderItemByUserId } from '../../../../../redux/apis/orderApi';
import { Link, useNavigate } from 'react-router-dom';
import { convertMoney } from '../../../../../until/Validations';
import { postPayment } from '../../../../../redux/apis/paymentApi';

function Order() {
    const dispatch = useDispatch();
    const userId = localStorage.getItem('id');
    const navigate = useNavigate();

    const order = useSelector((state) => state.order?.getOrderByUser.data);
    // debugger

    useEffect(() => {
        getOrder()
    }, []);

    const getOrder = async () => {
        await getOrderItemByUserId(userId, dispatch);
    };


    const updateStatus = async (Oid) => {
        await ChangeStatus(Oid, dispatch)
        getOrder()
    }
    // debugger

    const handldePost = async (id) => {
        // e.preventDefault();
        const newPay = {
          orderId: id
        }
        await postPayment(newPay, dispatch, navigate);
        getOrder()
        
      }

    return (
        <div className='container'>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Ngày đặt hàng</th>
                            <th scope="col">Tên khách hàng</th>
                            <th scope="col">Địa chỉ</th>
                            <th scope="col">Số điện thoại</th>
                            <th scope="col">Trạng thái đơn hàng</th>
                            <th scope="col">Trạng thái thanh toán</th>
                            <th scope="col">Giá trị đơn hàng</th>
                            <th scope="col">Thuế</th>
                            <th scope="col">Tổng tiền</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(order) && order.map((rev, index) => (
                                <tr key={index}>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{rev.orderDate}</td>
                                    <td>{rev.user.name}</td>
                                    <td>{rev.user.address}</td>
                                    <td>{rev.user.phone}</td>
                                    <td>{rev.status}</td>
                                    <td>{rev.paymentStatus}</td>
                                    <td>{rev.total}</td>
                                    <td>{rev.tax}</td>
                                    <td>{rev.billInvoice} VND</td>
                                    <td>
                                        <Link to={`/client/order/${rev.id}/orderDetails`} className='btn btn-outline-primary mx-2'>Xem chi tiết đơn hàng</Link>

                                    </td>
                                    <td>
                                        <Link to={`/client/order/${rev.id}/orderDetails`} className='btn btn-outline-primary mx-2' onClick={() => handldePost(rev.id)}>Thanh toán</Link>

                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default Order
