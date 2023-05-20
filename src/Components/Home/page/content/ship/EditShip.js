import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { editShipping, getIdShipping } from '../../../../../redux/apis/shippingApi'

function EditShip() {

      const dispatch = useDispatch()
      const navigate = useNavigate()
      
      const { id } = useParams()
      
      useEffect(() => {
        getIdShipping(id, dispatch)
      }, [id, dispatch])
      
      const data = useSelector(state => state.shipping.shippings?.getIdShipping)
    //   debugger
      
      useEffect(() => {
        if (data) {
          setShip(data.data)
        }
      }, [data])
      const [ship, setShip] = useState({
        shippingMethod: "",
        shippingAddress: "",
      })
      const { shippingMethod, shippingAddress } = ship
      
      const onInputChange = (e) => {
        setShip({ ...ship, [e.target.name]: e.target.value })
      }
      
      const handlePost = (e) => {
        e.preventDefault()
        editShipping(id, ship, dispatch, navigate)
      }


    return (
        <main>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h2 className='text-center m-4'>Edit Shipping</h2>
                        <form action="" method="post" onSubmit={(e) => handlePost(e)}>
                            <div className='mb-3'>
                                <label htmlFor='shippingMethod' className='form-label'>Shipping Method</label>
                                <input type={"text"} className="form-control" placeholder='Enter method ship' name='shippingMethod' required value={shippingMethod} onChange={(e) => onInputChange(e)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='shippingAddress' className='form-label'>Shipping Address</label>
                                <input type={"text"} className="form-control" placeholder='Enter Address ship' name='shippingAddress' required value={shippingAddress} onChange={(e) => onInputChange(e)} />
                            </div>
                            <button type='submit' className='btn btn-primary'>Save</button>
                            <Link to='/shipping' className='btn btn-outline-danger mx-2'>Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default EditShip