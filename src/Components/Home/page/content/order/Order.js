import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { gettAllOrder } from '../../../../../redux/apis/orderApi';
import { deleteReview, gettAllReview } from '../../../../../redux/apis/reviewApi';

function Order() {
  useEffect(() => {
    loadALl();
  }, []);
  const order = useSelector((state) => state.order?.allOrder);
  // debugger

  const dispatch = useDispatch()


  const deleteCus = async (id) => {
    await deleteReview(id, dispatch);
    loadALl();
  };

  const loadALl = async () => {
    await gettAllOrder(dispatch)
  };



  return (
    <main>
      <Link to="/review/add"><p>Add Review</p></Link>
      <div className='conatiner'>
        <div className='py-4'>
          <table className="table border">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Order status</th>
                <th scope="col">Payment method</th>
                <th scope="col">Order date</th>
                <th scope="col">Shipping method</th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                Array.isArray(order) && order.map((rev, index) => (
                  <tr key={index}>
                    <th scope='row'>{index + 1}</th>
                    <td>{rev.customer.name}</td>
                    <td>{rev.orderStatus.name}</td>
                    <td>{rev.payment.paymentMethod}</td>
                    <td>{rev.orderDate}</td>
                    <td>{rev.shipping.shippingMethod}</td>
                    <td>{rev.shipping.shippingAddress}</td>
                    <td>
                      <Link to={`/order/orderItem/${rev.id}`} className='btn btn-outline-primary mx-2'>View detail</Link>
                      <Link to={`/review/edit/${rev.id}`} className='btn btn-outline-primary mx-2'>Edit</Link>
                      <button className='btn btn-danger mx-2' onClick={() => { deleteCus(rev.id) }}>Delete</button>

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

export default Order