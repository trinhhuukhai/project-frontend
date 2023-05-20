import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./Product.css";
import { convertMoney } from '../../../../../until/Validations';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { getCartByUser, postCart } from '../../../../../redux/apis/cartApi';

function Product() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    getProducts();
    return () => {
      componentMounted = false;
    };
  }, []);

  const userId = localStorage.getItem("id")

  useEffect(() => {
    getCart(userId)
  }, [userId])

  const getProducts = async () => {
    setLoading(true);
    const response = await axios.get("http://localhost:8080/api/v1/product/getAllProduct");
    if (componentMounted) {
      const responseData = response.data.response;
      // debugger
      setData(responseData);
      setFilter(responseData);
      setLoading(false);
      console.log(filter);
    }
  };


  const getCart = async (userId) =>{
    await getCartByUser(userId, dispatch)
  }

 
  const DataCart = useSelector((state) => state.cart.carts?.allCart);
 

  
  const Loading = () => {
    return (
      <>
        Loading ...
      </>
    )
  }


  const dispatch = useDispatch();


  const addCart = async (id) => {
    const Data = {
      userId: userId,
      productId: id,
    }
    await postCart(Data, dispatch);
    getCart(userId);
  }

  const mes = useSelector((state) => state.cart?.postCart);
  
  const ShowProduct = () => {
    return (
      <>
       
        <Link to={"/client/cart"} className="cart"><i className='fas fa-shopping-cart me-1' /> Cart ({DataCart.count})</Link>
      
        
        <div className='buttons d-flex justify-content-center mb-5 pb-5'>
          <button className='btn btn-outline-dark me-2'>All</button>
          <button className='btn btn-outline-dark'>Men's Clothing</button>
        </div>
        <div className='row'>
          {Array.isArray(filter) && filter.map((product) => (
            <div key={product.id} className='col-md-3 mb-4'>
              <div className="card h-100 text-center p-4" key={product.id}>
                <img className="card-img-top" src={product.productImage} alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title mb-0">{product.name.substring(0, 12)}...</h5>
                  <p className="card-text lead fw-bold">$ {convertMoney(product.outputPrice)} VND</p>
                  <p className="card-text lead fw-bold">{product.id}</p>
                  {/* {Array.isArray(DataCart) && DataCart.map((cart) => (cart.id === product.id && cart.inventory === product.inventory)} */}
                  {product.inventory > 0 ? (
                    <a onClick={() => addCart(product.id)} href="#" className="btn btn-outline-dark">Add to Cart</a>
                  ) : (
                    <button disabled className="btn btn-outline-danger">Sold Out</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  }

  return (
    <div className='products'>
      <div className='container my-5 py-5'>
        <div className='row'>
          <div className='col-12 mb-5'>
            <h1 className='display-6 fw-bolder text-center'>Product</h1>
            <hr />
          </div>
        </div>
        <div className='row justify-content-center'>
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  )
}

export default Product;
