import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { deleteCategory, gettAllCategory } from '../../../../../redux/apis/categoryApi';
import { deleteCustomer, gettAllCustomer } from '../../../../../redux/apis/customerApi'

function Category() {

  const category = useSelector((state) => state.category.categorys?.allCategory);
  const dispatch = useDispatch();
  
  const deleteCat = async (id) => {
    await deleteCategory(id, dispatch);
    loadALl();
  };
  
  const loadALl = async () => {
    await gettAllCategory(dispatch);
  };
  
  useEffect(() => {
    loadALl();
  }, []);

  return (
    <main>
      <Link to="/category/add"><span>Add Category</span></Link>
      <div className='conatiner'>
        <div className='py-4'>
          <table className="table border">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                Array.isArray(category) && category.map((cat, index) => (
                  <tr key={index}>
                    <th scope='row'>{index + 1}</th>
                    <td>{cat.name}</td>
                    <td>{cat.description}</td>
                    <td>
                      <button className='btn btn-primary mx-2'>View</button>
                      <Link to={`/category/edit/${cat.id}`} className='btn btn-outline-primary mx-2'>Edit</Link>
                      <button className='btn btn-danger mx-2' onClick={() =>{deleteCat(cat.id)}}>Delete</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>


    </main>

  )
}

export default Category