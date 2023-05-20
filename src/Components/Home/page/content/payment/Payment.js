import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { deletePayment, gettAllPayment } from '../../../../../redux/apis/paymentApi';

function Payment() {
  const payment = useSelector((state) => state.payment.payments?.allPayment);
  const dispatch = useDispatch();

  const deleteCus = async (id) => {
    await deletePayment(id, dispatch);
    loadALl();
  };

  const loadALl = async () => {
    await gettAllPayment(dispatch);
  };

  useEffect(() => {
    loadALl();
  }, []);

  return (
    <main>
      <Link to="/payment/add"><span>Add Payment</span></Link>
      <div className='conatiner'>
        <div className='py-4'>
          <table className="table border">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Payment Method</th>
                <th scope="col">Amount</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                Array.isArray(payment) && payment.map((pay, index) => (
                  <tr key={index}>
                    <th scope='row'>{index + 1}</th>
                    <td>{pay.paymentMethod}</td>
                    <td>{pay.amount} VND</td>
                    <td>
                      <button className='btn btn-primary mx-2'>View</button>
                      <Link to={`/payment/edit/${pay.id}`} className='btn btn-outline-primary mx-2'>Edit</Link>
                      <button className='btn btn-danger mx-2' onClick={() => { deleteCus(pay.id) }}>Delete</button>

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