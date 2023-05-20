import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { deleteProduct, gettAllProduct, gettAllProductPagination } from '../../../../../redux/apis/productApi';

function Product() {

  const product = useSelector((state) => state.product.products?.allProduct.response.content);
  // debugger
  const dispatch = useDispatch();
  const [pageN, setPageN] = useState("0");

  const handleChange = (event) => {
    const newPageN = event.target.value;
    setPageN(newPageN);
    gettAllProductPagination(newPageN, pageS, dispatch);
    console.log(newPageN);
  };

  const [pageS, setPageS] = useState(5);
  const handlSize = (event) => {
    const newPageS = event.target.value;
    setPageS(newPageS);
    gettAllProductPagination(pageN, newPageS, dispatch);
    console.log(newPageS);
  };

  const deleteCus = async (id) => {
    await deleteProduct(id, dispatch);
    loadALl();
  };

  const loadALl = async () => {
    await gettAllProductPagination(pageN, pageS, dispatch)
  };

  useEffect(() => {
    loadALl();
  }, []);

  return (
    <main>
      <Link to="/product/add"><p>Add Product</p></Link>
      <span>Page:</span>
      <select className="selectpicker mx-2" onChange={handleChange}>
        <option selected value="0">Choose page</option>
        <option value="0">1</option>
        <option value="1">2</option>
        <option value="2">3</option>
      </select>
      <span>Record:</span>
      <select className="selectpicker mx-2" onChange={handlSize}>
        <option selected value="5">Choose size</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
      <div className='conatiner'>
        <div className='py-4'>
          <table className="table border">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Brand</th>
                <th scope="col">Color</th>
                <th scope="col">Inventory</th>
                <th scope="col">Image Product</th>
                <th scope="col">Category name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                Array.isArray(product) && product.map((pro, index) => (
                  <tr key={index}>
                    <th scope='row'>{index + 1}</th>
                    <td>{pro.name}</td>
                    <td>{pro.description}</td>
                    <td>{pro.price}</td>
                    <td>{pro.brand}</td>
                    <td>{pro.color}</td>
                    <td>{pro.inventory}</td>
                    <td><img alt='' src={pro.productImage} style={{ width: '100px', height: '100px' }} /></td>
                    <td>{pro.category.name}</td>
                    <td>
                      <button className='btn btn-primary mx-2'>View</button>
                      <Link to={`/product/edit/${pro.id}`} className='btn btn-outline-primary mx-2'>Edit</Link>
                      <button className='btn btn-danger mx-2' onClick={() => { deleteCus(pro.id) }}>Delete</button>

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