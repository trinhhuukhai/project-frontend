import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { postCustomer } from '../../../../../redux/apis/customerApi'

function AddCustomer() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

  const handldePost = (e) => {
    e.preventDefault()
    const newCus = {
      name: name,
      email: email,
      phone: phone,
      address: address
    }
    postCustomer(newCus, dispatch, navigate)
  }

  return (
    <main>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='text-center m-4'>Add Customer</h2>
            <form action="" method="post" onSubmit={handldePost}>
              <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>Name</label>
                <input type={"text"} className="form-control" placeholder='Enter name' name='name' required onChange={(e) => setName(e.target.value)} />
              </div>
              <div className='mb-3'>
                <label htmlFor='Email' className='form-label'>Email</label>
                <input type={"text"} className="form-control" placeholder='Enter name' name='email' required onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className='mb-3'>
                <label htmlFor='Phone' className='form-label'>Phone</label>
                <input type={"text"} className="form-control" placeholder='Enter name' name='phone' required onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className='mb-3'>
                <label htmlFor='Address' className='form-label'>Address</label>
                <input type={"text"} className="form-control" placeholder='Enter name' name='address' required onChange={(e) => setAddress(e.target.value)} />
              </div>
              <button type='submit' className='btn btn-primary'>Save</button>
              <Link to='/customer' className='btn btn-outline-danger mx-2'>Cancel</Link>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AddCustomer