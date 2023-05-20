import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { postPayment } from '../../../../../redux/apis/paymentApi'

function AddPayment() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [paymentMethod, setPaymentMethod] = useState("")
  const [amount, setAmount] = useState("")

  const handldePost = (e) => {
    e.preventDefault()
    const newPay = {
      paymentMethod: paymentMethod,
      amount: amount,
    }
    postPayment(newPay, dispatch, navigate)
  }

  return (
    <main>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='text-center m-4'>Add Payment</h2>
            <form action="" method="post" onSubmit={handldePost}>
              <div className='mb-3'>
                <label htmlFor='paymentMethod' className='form-label'>Method payment</label>
                <input type={"text"} className="form-control" placeholder='Enter method ship' name='paymentMethod' required onChange={(e) => setPaymentMethod(e.target.value)} />
              </div>
              <div className='mb-3'>
                <label htmlFor='amount' className='form-label'>Amount</label>
                <input type={"text"} className="form-control" placeholder='Enter Amount' name='amount' required onChange={(e) => setAmount(e.target.value)} />
              </div>
              <button type='submit' className='btn btn-primary'>Save</button>
              <Link to='/payment' className='btn btn-outline-danger mx-2'>Cancel</Link>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AddPayment