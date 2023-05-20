import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { postStatus } from '../../../../../redux/apis/statusApi'

function AddStatus() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState("")

  const handldePost = (e) => {
    e.preventDefault()
    const newStatus = {
      name: name,
    }
    postStatus(newStatus, dispatch, navigate)
  }

  return (
    <main>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='text-center m-4'>Thêm trạng thái đơn hàng</h2>
            <form action="" method="post" onSubmit={handldePost}>
              <div className='mb-3'>
                <label htmlFor='name' className='form-label'>Trạng thái đơn hàng</label>
                <input type={"text"} className="form-control" placeholder='Enter status' name='name' required onChange={(e) => setName(e.target.value)} />
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

export default AddStatus