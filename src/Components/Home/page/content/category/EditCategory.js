import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { editCategory, getIdCategory } from '../../../../../redux/apis/categoryApi';

function EditCategory() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.auth.login?.currentUser)
  const token = user?.token
  const { id } = useParams()

  useEffect(() => {
    getIdCategory(id,token, dispatch)
  }, [id, dispatch])

  const data = useSelector((state) => state.category.categorys?.getIdCategory.data)

  useEffect(() => {
    if (data) {
      setCat(data)
    }
  }, [data])
  const [cat, setCat] = useState({
    name: ""
  })
  const { name } = cat

  const onInputChange = (e) => {
    setCat({ ...cat, [e.target.name]: e.target.value })
  }

  const handlePost = (e) => {
    e.preventDefault()
    editCategory(id, cat,token, dispatch, navigate)
    // debugger
  }

  return (
    <main>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='text-center m-4'>Sửa danh mục sản phẩm</h2>
            <form action="" method="post" onSubmit={(e) => handlePost(e)}>
              <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>Name</label>
                <input type={"text"} className="form-control" placeholder='Tên danh mục' name='name' required value={name} onChange={(e) => onInputChange(e)} />
              </div>
              <button type='submit' className='btn btn-primary'>Lưu</button>
              <Link to='/category' className='btn btn-outline-danger mx-2'>Hủy</Link>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default EditCategory;
