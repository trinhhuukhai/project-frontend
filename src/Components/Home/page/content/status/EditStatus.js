import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { editShipping, getIdShipping } from '../../../../../redux/apis/shippingApi'
import { editStatus, getIdStatus } from '../../../../../redux/apis/statusApi'

function EditStatus() {

      const dispatch = useDispatch()
      const navigate = useNavigate()
      
      const { id } = useParams()
      
      useEffect(() => {
        getIdStatus(id, dispatch)
      }, [id, dispatch])
      
      const data = useSelector(state => state.status.statuss?.getIdStatus)

      
      useEffect(() => {
        if (data) {
          setStatus(data.data)
        }
      }, [data])
      const [status, setStatus] = useState({
        name: "",

      })
      const { name } = status
      
      const onInputChange = (e) => {
        setStatus({ ...status, [e.target.name]: e.target.value })
      }
      
      const handlePost = (e) => {
        e.preventDefault()
        editStatus(id, status, dispatch, navigate)
      }


    return (
        <main>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h2 className='text-center m-4'>Sửa trạng thái đơn hàng</h2>
                        <form action="" method="post" onSubmit={(e) => handlePost(e)}>
                            <div className='mb-3'>
                                <label htmlFor='name' className='form-label'>Trạng thái đơn hàng</label>
                                <input type={"text"} className="form-control" placeholder='Enter status' name='name' required value={name} onChange={(e) => onInputChange(e)} />
                            </div>
                            <button type='submit' className='btn btn-primary'>Lưu</button>
                            <Link to='/status' className='btn btn-outline-danger mx-2'>Hủy</Link>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default EditStatus