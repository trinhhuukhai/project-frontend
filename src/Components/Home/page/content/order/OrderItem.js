import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getOrderItembyOderId, gettAllOrder } from '../../../../../redux/apis/orderApi';
import { deleteReview, gettAllReview } from '../../../../../redux/apis/reviewApi';

function OrderItem() {
    useEffect(() => {
        loadALl();
    }, []);

    const dispatch = useDispatch()
    const { id } = useParams()

    const loadALl = async () => {
        await getOrderItembyOderId(id, dispatch)
    };

    const orderItem = useSelector((state) => state.order?.allOrderItem);
    return (
        <main>
            <Link to="/review/add"><p>Add Review</p></Link>
            <div className='conatiner'>
                <div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Order status</th>
                                <th scope="col">Payment method</th>
                                <th scope="col">Order date</th>
                                <th scope="col">Shipping method</th>
                                <th scope="col">Address</th>
                                <th scope="col">Product name</th>
                                <th scope="col">Product color</th>
                                <th scope="col">Product brand</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Product Image</th>
                                <th scope="col">Total price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(orderItem.data) && orderItem.data.map((pro, index) => (
                                <tr>
                                <td>{index+1}</td>
                                <td>{pro.order.customer.name}</td>
                                <td>{pro.order.customer.phone}</td>
                                <td>{pro.order.orderStatus.name}</td>
                                <td>{pro.order.payment.paymentMethod}</td>
                                <td>{pro.order.orderDate}</td>
                                <td>{pro.order.shipping.shippingMethod}</td>
                                <td>{pro.order.shipping.shippingAddress}</td>
                                <td>{pro.product.name}</td>
                                <td>{pro.product.color}</td>
                                <td>{pro.product.brand}</td>
                                <td>{pro.price} VND</td>
                                <td>{pro.quantity}</td>
                                <td><img alt='' src={pro.product.productImage} style={{ width: '100px', height: '100px' }} /></td>
                                <td>{pro.price * pro.quantity} VND</td>
                            </tr>))}
                        </tbody>
                    </table>
                </div>

                <Link to='/order' className='btn btn-outline-danger mx-2'>Back</Link>
            </div>
        </main>

    )
}

export default OrderItem