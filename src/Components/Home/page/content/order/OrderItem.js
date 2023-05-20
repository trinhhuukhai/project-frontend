import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getOrderItembyOderId } from '../../../../../redux/apis/orderApi';

function OrderItem() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const orderItem = useSelector((state) => state.order?.allOrderItem.data);
    // debugger

    const loadAll = async () => {
        await getOrderItembyOderId(id, dispatch);
    };

    useEffect(() => {
        loadAll();
    }, []);


    if (!Array.isArray(orderItem.orderItemResponses)) {
        return <div>No items.</div>;
    }



    return (
        <main>
            <div className='container'>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Tên sản phẩm</th>
                                <th scope="col">Giá</th>
                                <th scope="col">Hãng</th>
                                <th scope="col">Ảnh sản phẩm</th>
                                <th scope="col">Số lượng</th>
                                <th scope="col">Số tiền</th>


                            </tr>
                        </thead>
                        <tbody>
                            {
                                Array.isArray(orderItem.orderItemResponses) && orderItem.orderItemResponses.map((pro, index) => (
                                    <tr key={index}>
                                        <th scope='row'>{index + 1}</th>
                                        <td>{pro.productResponses.name}</td>
                                        <td>{pro.productResponses.outputPrice} VND</td>
                                        <td>{pro.productResponses.brand}</td>
                                        <td><img alt='' src={pro.productResponses.productImage} style={{ width: '100px', height: '100px' }} /></td>
                                        <td>{pro.quantity}</td>
                                        <td>{pro.total} VND</td>

                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                <Link to='/order' className='btn btn-outline-danger mx-2'>Trở lại</Link>
            </div>
        </main>
    );
}

export default OrderItem;
