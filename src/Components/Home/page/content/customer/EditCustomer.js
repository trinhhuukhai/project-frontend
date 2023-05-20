import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { editCustomer, getIdCustomer} from '../../../../../redux/apis/customerApi'

function EditCustomer() {


     
      
      const dispatch = useDispatch()
      const navigate = useNavigate()
      
      const { id } = useParams()
      
      useEffect(() => {
        getIdCustomer(id, dispatch)
      }, [id, dispatch])
      
      const data = useSelector(state => state.customer.customers?.getIdCustomer)
    //   debugger
      
      useEffect(() => {
        if (data) {
          setCusto(data.data)
        }
      }, [data])
      const [custo, setCusto] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
      })
      const { name, email, phone, address } = custo
      
      const onInputChange = (e) => {
        setCusto({ ...custo, [e.target.name]: e.target.value })
      }
      
      const handlePost = (e) => {
        e.preventDefault()
        editCustomer(id, custo, dispatch, navigate)
      }


    return (
        <main>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h2 className='text-center m-4'>Edit Customer</h2>
                        <form action="" method="post" onSubmit={(e) => handlePost(e)}>
                            <div className='mb-3'>
                                <label htmlFor='Name' className='form-label'>Name</label>
                                <input type={"text"} className="form-control" placeholder='Enter name' name='name' required value={name} onChange={(e) => onInputChange(e)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='Email' className='form-label'>Email</label>
                                <input type={"text"} className="form-control" placeholder='Enter name' name='email' required value={email} onChange={(e) => onInputChange(e)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='Phone' className='form-label'>Phone</label>
                                <input type={"text"} className="form-control" placeholder='Enter name' name='phone' required value={phone} onChange={(e) => onInputChange(e)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='Address' className='form-label'>Address</label>
                                <input type={"text"} className="form-control" placeholder='Enter name' name='address' required value={address} onChange={(e) => onInputChange(e)} />
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

export default EditCustomer