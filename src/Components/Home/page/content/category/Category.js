import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { deleteCategory, gettAllCategory } from '../../../../../redux/apis/categoryApi';
import { deleteCustomer, gettAllCustomer } from '../../../../../redux/apis/customerApi'

function Category() {

  // const id = localStorage.getItem("id")

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
      <Link to="/category/add"><span>Thêm danh mục sản phẩm</span></Link>
      <div className='conatiner'>
        <div className='py-4'>
          <table className="table border">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Tên danh mục</th>
                <th scope="col">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {
                Array.isArray(category) && category.map((cat, index) => (
                  <tr key={index}>
                    <th scope='row'>{index + 1}</th>
                    <td>{cat.name}</td>
                    <td>
                      {/* <button className='btn btn-primary mx-2'>Xem chi tiết</button> */}
                      <Link to={`/category/edit/${cat.id}`} className='btn btn-outline-primary mx-2'>Sửa thông tin</Link>
                      <button className='btn btn-danger mx-2' onClick={() =>{deleteCat(cat.id)}}>Xóa</button>
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