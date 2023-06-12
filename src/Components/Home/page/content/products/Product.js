import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { convertMoney } from '../../../../../until/Validations';

import { deleteProduct, gettAllProduct } from '../../../../../redux/apis/productApi';

function Product() {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const idShop = useSelector((state) => state.auth.login?.getInfo.data.shop.id)

  const product = useSelector((state) => state.product.products?.allProduct.data);

  const dispatch = useDispatch();


  useEffect(() => {
    loadALl();
  }, []);

  useEffect(() => {
    const results = product != "" && product.filter(pro => pro.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results);
  }, [searchTerm, product]);


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };




  const deleteCus = async (id) => {
    await deleteProduct(id, dispatch);
    loadALl();
  };

  // const id = localStorage.getItem("id")

  const loadALl = async () => {
    await gettAllProduct(idShop, dispatch);
  };

  const formattedAmount = (amount) => {
    if (amount) {
      return amount.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
      });
    }
    return '0 đ';
  };


  if (product == "") {
    return <main>
      <div>No data</div>
      <Link to="/product/add"><p>Thêm mới sản phẩm</p></Link>
    </main>
  }

  return (
    <main>
      <Link to="/product/add"><p>Thêm mới sản phẩm</p></Link>
      <div className='conatiner'>
        <div className='py-4'>
         

          <div className="search-bar mb-4 d-flex align-items-center">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Tìm kiếm sản phẩm..."
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
                <th scope="col">Tên sản phẩm</th>
                <th scope="col">Mô tả sản phẩm</th>
                <th scope="col">Giá nhập</th>
                <th scope="col">Giá bán</th>
                <th scope="col">Hãng</th>
                <th scope="col">Màu sắc</th>
                <th scope="col">Size</th>
                <th scope="col">Số lượng</th>
                <th scope="col">Đã bán</th>
                <th scope="col">Hình ảnh sản phẩm</th>
                {/* <th scope="col">Category name</th> */}
                <th scope="col">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {
                (searchResults.length > 0 ? searchResults : product).map((pro, index) => (
                  <tr key={index}>
                    <th scope='row'>{index + 1}</th>
                    <td>{pro.name}</td>
                    <td>{pro.description}</td>
                    <td>{formattedAmount(pro.inputPrice)}</td>
                    <td>{formattedAmount(pro.outputPrice)}</td>
                    <td>{pro.brand}</td>
                    <td>{pro.color}</td>
                    <td>{Array.isArray(pro.sizes) && pro.sizes.map((size) => size.sizeName).join(', ')}</td>
                    <td>{pro.inventory}</td>
                    <td>{pro.sold}</td>
                    <td><img alt='' src={pro.productImage} style={{ width: '100px', height: '100px' }} /></td>
                    {/* <td>{pro.category.name}</td> */}
                    <td>
                      <Link to={`/product/detail/${pro.id}`} className='btn btn-primary mx-2'>Xem chi tiết</Link>
                      <Link to={`/product/edit/${pro.id}`} className='btn btn-outline-primary mx-2'>Sửa</Link>
                      <button className='btn btn-danger mx-2' onClick={() => { deleteCus(pro.id) }}>Xóa</button>

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

export default Product