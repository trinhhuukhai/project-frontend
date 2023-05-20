import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { editPayment, getIdPayment } from '../../../../../redux/apis/paymentApi'
import { editShipping, getIdShipping } from '../../../../../redux/apis/shippingApi'

function EditPayment() {

      const dispatch = useDispatch()
      const navigate = useNavigate()
      
      const { id } = useParams()
      
      useEffect(() => {
        getIdPayment(id, dispatch)
      }, [id, dispatch])
      
      const data = useSelector(state => state.payment.payments?.getIdPayment)
    //   debugger
      
      useEffect(() => {
        if (data) {
          setPay(data.data)
        }
      }, [data])
      const [pay, setPay] = useState({
        paymentMethod: "",
        amount: "",
      })
      const { paymentMethod, amount } = pay
      
      const onInputChange = (e) => {
        setPay({ ...pay, [e.target.name]: e.target.value })
      }
      
      const handlePost = (e) => {
        e.preventDefault()
        editPayment(id, pay, dispatch, navigate)
      }


    return (
        <main>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h2 className='text-center m-4'>Edit Shipping</h2>
                        <form action="" method="post" onSubmit={(e) => handlePost(e)}>
                            <div className='mb-3'>
                                <label htmlFor='paymentMethod' className='form-label'>Payment method</label>
                                <input type={"text"} className="form-control" placeholder='Enter method payment' name='paymentMethod' required value={paymentMethod} onChange={(e) => onInputChange(e)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='amount' className='form-label'>Amount</label>
                                <input type={"text"} className="form-control" placeholder='Enter amount' name='amount' required value={amount} onChange={(e) => onInputChange(e)} />
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

export default EditPayment