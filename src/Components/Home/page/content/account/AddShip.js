import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { postCustomer } from '../../../../../redux/apis/customerApi'
import { postShipping } from '../../../../../redux/apis/shippingApi'

function AddShip() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [shippingMethod, setShippingMethod] = useState("")
  const [shippingAddress, setShippingAddress] = useState("")

  const handldePost = (e) => {
    e.preventDefault()
    const newShip = {
      shippingMethod: shippingMethod,
      shippingAddress: shippingAddress,
    }
    postShipping(newShip, dispatch, navigate)
  }

  return (
    <main>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='text-center m-4'>Thêm phương thức vận chuyển</h2>
            <form action="" method="post" onSubmit={handldePost}>
              <div className='mb-3'>
                <label htmlFor='shippingMethod' className='form-label'>Phương thức vận chuyển</label>
                <input type={"text"} className="form-control" placeholder='Enter method ship' name='shippingMethod' required onChange={(e) => setShippingMethod(e.target.value)} />
              </div>
              {/* <div className='mb-3'>
                <label htmlFor='shippingAddress' className='form-label'>Address</label>
                <input type={"text"} className="form-control" placeholder='Enter Address ship' name='shippingAddress' required onChange={(e) => setShippingAddress(e.target.value)} />
              </div> */}
              <button type='submit' className='btn btn-primary'>Lưu</button>
              <Link to='/shipping' className='btn btn-outline-danger mx-2'>Hủy</Link>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AddShip