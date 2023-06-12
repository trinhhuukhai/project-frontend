import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteCart, editCart, getCartByUser, postOrder } from '../../../../../redux/apis/cartApi';
import { convertMoney } from '../../../../../until/Validations';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = localStorage.getItem('id');
  const dataCart = useSelector((state) => state.cart.carts?.allCart);
  debugger
  
  
  let total = 0;

  dataCart.data != "" && dataCart.data.forEach(item => {
    total += item.totalPrice;
  });


  useEffect(() => {
    getCart(userId);
  }, []);

  const getCart = async (userId) => {
    await getCartByUser(userId, dispatch);
  };

  const btnDelete = async (id) => {
    await deleteCart(id, dispatch);
    getCart(userId);
  };

  const [updatedQuantities, setUpdatedQuantities] = useState({});

  const handleQuantityChange = (id, value) => {
    setUpdatedQuantities({ ...updatedQuantities, [id]: value });
  };

  const handleUpdateClick = async (id) => {
    const updatedQuantity = updatedQuantities[id];
    if (updatedQuantity !== undefined) {
      await editCart({ newQuantity: updatedQuantity }, id, dispatch);
      setUpdatedQuantities({});
      getCart(userId);
    }
  };

  const handlePost = async () => {
    const newOrder = {
      userId: userId,
    };
    await postOrder(newOrder, dispatch, navigate);
  };

     if (dataCart.data == "") {
        return <div>Giỏ hàng trống</div>;
    }

  return (
    <div className="cart-container">
      <h2 className="content-center">Cart</h2>
      <div className="cart-items-container">
        <table className="table border">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              Array.isArray(dataCart.data) && dataCart.data.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.product.name}</td>
                  <td>{item.price} VND</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={updatedQuantities[item.id] ?? item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    />
                  </td>
                  <td>{item.totalPrice} VND</td>
                  <td>
                    <button className="btn btn-primary mx-2" onClick={() => handleUpdateClick(item.id)}>
                      Cập nhập
                    </button>
                    <button className="btn btn-danger mx-2" onClick={() => btnDelete(item.id)}>
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" className="text-end">
                Tổng tiền:
              </td>
              <td>{total} VND</td>
            </tr>
          </tfoot>
        </table>
        <button type="submit" className="btn btn-primary" onClick={() => handlePost()}>
          Đặt hàng
        </button>

      </div>
    </div>
  );
};

export default Cart;
