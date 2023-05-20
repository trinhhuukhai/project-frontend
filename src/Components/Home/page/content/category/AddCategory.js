import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { postCategory } from '../../../../../redux/apis/categoryApi'

function AddCategory() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  const handldePost = (e) => {
    e.preventDefault()
    const newCat = {
      name: name,
      description:description
    }
    postCategory(newCat, dispatch, navigate)
  }

  return (
    <main>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='text-center m-4'>Add Category</h2>
            <form action="" method="post" onSubmit={handldePost}>
              <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>Name</label>
                <input type={"text"} className="form-control" placeholder='Enter name' name='name' required onChange={(e) => setName(e.target.value)} />
              </div>
              <div className='mb-3'>
                <label htmlFor='Description' className='form-label'>Description</label>
                <input type={"text"} className="form-control" placeholder='Enter description' name='description' required onChange={(e) => setDescription(e.target.value)} />
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

export default AddCategory