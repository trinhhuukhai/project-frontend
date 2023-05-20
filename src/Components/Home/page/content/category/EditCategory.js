import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { editCategory, getIdCategory } from '../../../../../redux/apis/categoryApi'

function EditCategory() {

      const dispatch = useDispatch()
      const navigate = useNavigate()
      
      const { id } = useParams()
      
      useEffect(() => {
        getIdCategory(id, dispatch)
      }, [id, dispatch])
      
      const data = useSelector(state => state.category.categorys?.getIdCategory)
      
      useEffect(() => {
        if (data) {
          setcate(data.data)
        }
      }, [data])
      const [cate, setcate] = useState({
        name: "",
        description: "",
      })
      const { name, description} = cate
      
      const onInputChange = (e) => {
        setcate({ ...cate, [e.target.name]: e.target.value })
      }
      
      const handlePost = (e) => {
        e.preventDefault()
        editCategory(id, cate, dispatch, navigate)
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
                                <label htmlFor='Description' className='form-label'>Description</label>
                                <input type={"text"} className="form-control" placeholder='Enter description' name='description' required value={description} onChange={(e) => onInputChange(e)} />
                            </div>
                            <button type='submit' className='btn btn-primary'>Save</button>
                            <Link to='/category' className='btn btn-outline-danger mx-2'>Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default EditCategory