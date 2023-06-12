import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getOrderItemById, getOrderItembyOderId } from '../../../../../redux/apis/orderApi';

function OrderItem() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const orderItem = useSelector((state) => state.order?.allOrderItem);
    const data = orderItem?.data;
    

    useEffect(() => {
        loadAll();
    }, []);

    const loadAll = async () => {
        await getOrderItemById(id, dispatch);
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



    return (
        <main>
            <div className='container'>
                <div>
                    <table className="table">
                        <thead>
                            <tr>

                                <th scope="col">Tên sản phẩm</th>
                                <th scope="col">Giá</th>
                                <th scope="col">Ảnh sản phẩm</th>
                                <th scope="col">Màu sắc</th>
                                <th scope="col">Size</th>
                                <th scope="col">Số lượng</th>
                                <th scope="col">Số tiền</th>


                            </tr>
                        </thead>
                        <tbody>

                            <tr>

                                <td>{data.product.name}</td>
                                <td>{formattedAmount(data.price)}</td>
                             
                                <td><img alt='' src={data.product.productImage} style={{ width: '100px', height: '100px' }} /></td>    
                                <td>{data.product.color}</td>
                                <td>{data.size}</td>
                                <td>{data.quantity}</td>
                                <td>{formattedAmount(data.total)}</td>

                            </tr>


                        </tbody>
                    </table>
                </div>

                <Link to='/order' className='btn btn-outline-danger mx-2'>Trở lại</Link>
            </div>
        </main>
    );
}

export default OrderItem;
