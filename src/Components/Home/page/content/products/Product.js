import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { convertMoney } from '../../../../../until/Validations';

import { deleteProduct, gettAllProduct, gettAllProductPagination } from '../../../../../redux/apis/productApi';

function Product() {

  useEffect(() => {
    loadALl();
  }, []);

  const idShop = useSelector((state) => state.auth.login?.getInfo.data.shop.id)

  const product = useSelector((state) => state.product.products?.allProduct.data);
  
  const dispatch = useDispatch();
  const [pageN, setPageN] = useState("1");

  const handleChange = (event) => {
    const newPageN = event.target.value;
    setPageN(newPageN);
    gettAllProductPagination(dispatch);
    console.log(newPageN);
  };

  const [pageS, setPageS] = useState(5);

  const handlSize = (event) => {
    const newPageS = event.target.value;
    setPageS(newPageS);
    gettAllProductPagination( dispatch);
    console.log(newPageS);
  };

  const deleteCus = async (id) => {
    await deleteProduct(id, dispatch);
    loadALl();
  };

  // const id = localStorage.getItem("id")

  const loadALl = async () => {
    await gettAllProduct(idShop,dispatch);
  };


  return (
    <main>
      <Link to="/product/add"><p>Thêm mới sản phẩm</p></Link>
      <div className='conatiner'>
        <div className='py-4'>
          <table className="table border">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Tên sản phẩm</th>
                <th scope="col">Mô tả sản phẩm</th>
                <th scope="col">Giá nhập</th>
                <th scope="col">Giá bán</th>
                <th scope="col">Hãng</th>
                <th scope="col">Màu sắc</th>
                <th scope="col">Số lượng</th>
                <th scope="col">Đã bán</th>
                <th scope="col">Hình ảnh sản phẩm</th>
                {/* <th scope="col">Category name</th> */}
                <th scope="col">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {
                Array.isArray(product) && product.map((pro, index) => (
                  <tr key={index}>
                    <th scope='row'>{index + 1}</th>
                    <td>{pro.name}</td>
                    <td>{pro.description}</td>
                    <td>{pro.inputPrice} VND</td>
                    <td>{pro.outputPrice} VND</td>
                    <td>{pro.brand}</td>
                    <td>{pro.color}</td>
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