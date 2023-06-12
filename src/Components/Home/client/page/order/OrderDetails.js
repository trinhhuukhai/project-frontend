import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getOrderItembyOderId } from '../../../../../redux/apis/orderApi';
import { convertMoney } from '../../../../../until/Validations';

function OrderDetails() {
    const dispatch = useDispatch();
    const { id } = useParams();
    
    const orderItem = useSelector((state) => state.order?.orderItem.data);
   
    useEffect(() => {
        loadAll();
    }, []);

    const loadAll = async () => {
        await getOrderItembyOderId(id, dispatch);
    };

    // if (!Array.isArray(orderItem)) {
    //     return <div>No items found.</div>;
    // }

    return (
        <div className='container'>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tên sản phẩm</th>
                            <th scope="col">Giá</th>
                         
                            <th scope="col">Hình ảnh sản phẩm</th>
                            <th scope="col">Số lượng</th>
                            <th scope="col">Shop</th>
                            <th scope="col">Trạng thái</th>
                            <th scope="col">Thanh toán</th>
                            <th scope="col">Thành tiền</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.isArray(orderItem) && orderItem.map((pro, index) => (
                                <tr key={index}>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{pro.product.name}</td>
                                    <td>{pro.price} VND</td>
                                    
                                
                                    <td><img alt='' src={pro.product.productImage} style={{ width: '100px', height: '100px' }} /></td>    
                                    <td>{pro.quantity}</td>
                                    <td>{pro.product.shop.name}</td>
                                    <td>{pro.status}</td>
                                    <td>{pro.paymentStatus}</td>
                                    <td>{pro.total} VND</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            <Link to='/client/order' className='btn btn-outline-danger mx-2'>Back</Link>
        </div>
    );
}

export default OrderDetails;
