import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { postCategory } from '../../../../../redux/apis/categoryApi'

function AddCategory() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector((state) => state.auth.login?.currentUser)

  const id = user?.id

  const [name, setName] = useState("")

  const handldePost = (e) => {
    e.preventDefault()
    const newCat = {
      name: name,
      userId:id,
    }
    postCategory(newCat, dispatch, navigate)
  }

  return (
    <main>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='text-center m-4'>Thêm danh mục sản phẩm</h2>
            <form action="" method="post" onSubmit={handldePost}>
              <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>Tên danh mục</label>
                <input type={"text"} className="form-control" placeholder='Enter name' name='name' required onChange={(e) => setName(e.target.value)} />
              </div>
              <button type='submit' className='btn btn-primary'>Lưu</button>
              <Link to='/category' className='btn btn-outline-danger mx-2'>Hủy</Link>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AddCategory