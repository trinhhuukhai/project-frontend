import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { deleteCategory, gettAllCategory } from '../../../../../redux/apis/categoryApi';

function Category() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const user = useSelector((state) => state.auth.login?.currentUser)
  const token = user?.token
  const category = useSelector((state) => state.category.categorys?.allCategory);
  const dispatch = useDispatch();





  useEffect(() => {
    loadAll();
  }, []);

  useEffect(() => {
    const results = category.filter(cat => cat.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results);
  }, [searchTerm, category]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const deleteCat = async (id) => {
    await deleteCategory(id, token, dispatch);
    loadAll();
  };

  const loadAll = async () => {
    await gettAllCategory(dispatch);
  };



  return (
    <main>


      <Link to="/category/add">
        <span>Thêm danh mục sản phẩm</span>
      </Link>

      <div className='container'>

        <div className='py-4'>
          <div className="search-bar mb-4 d-flex align-items-center">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Tìm kiếm danh mục..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="btn btn-primary" type="button">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <table className="table border">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên danh mục</th>
                <th scope="col">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {(searchResults.length > 0 ? searchResults : category).map((cat, index) => (
                <tr key={index}>
                  <th scope='row'>{index + 1}</th>
                  <td>{cat.name}</td>
                  <td>
                    <Link to={`/category/edit/${cat.id}`} className='btn btn-outline-primary mx-2'>Sửa thông tin</Link>
                    <button className='btn btn-danger mx-2' onClick={() => { deleteCat(cat.id) }}>Xóa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default Category;
