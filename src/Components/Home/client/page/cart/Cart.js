import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { deleteCart, editCart, getCartByUser, postOrder } from '../../../../../redux/apis/cartApi';
import { convertMoney } from '../../../../../until/Validations';
import { gettAllPayment } from '../../../../../redux/apis/paymentApi';
import { gettAllShipping } from '../../../../../redux/apis/shippingApi';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = localStorage.getItem('id');


  useEffect(() => {
    getCart(userId);
    getPaymentandShip()
  }, []);

  const getPaymentandShip = async () => {
    await gettAllPayment(dispatch);
  };
  const payment = useSelector((state) => state.payment.payments?.allPayment);

  const convertedPayment = payment?.map(obj => ({ label: obj.id, value: obj.paymentMethod }));
  const [pay, setPay] = useState(convertedPayment.length > 0 ? convertedPayment[0].label : '');


  const getCart = async (userId) => {
    await getCartByUser(userId, dispatch);
  };
  const DataCart = useSelector((state) => state.cart.carts?.allCart);
  // debugger
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


  const handldePost = async () => {
    // e.preventDefault();
    const newSOrder = {
      userId: userId
    }
    await postOrder(newSOrder, dispatch, navigate);
    // getCart(userId);
  }



  const disabled = pay === '' || DataCart.count === 0;
  // debugger


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
            {DataCart && Array.isArray(DataCart.productResponses) && // Check if DataCart is defined before accessing it
              DataCart.productResponses.map((i, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{i.name}</td>
                  <td>{i.outputPrice} VND</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={updatedQuantities[i.cart_item_id] ?? i.quantity}
                      onChange={(e) =>
                        handleQuantityChange(i.cart_item_id, e.target.value)
                      }
                    />

                  </td>
                  <td>{convertMoney(i.total)} VND</td>
                  <td>
                    <button
                      className="btn btn-primary mx-2"
                      onClick={() => handleUpdateClick(i.cart_item_id)}
                    >
                      Update Quantity
                    </button>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => {
                        btnDelete(i.cart_item_id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" className="text-end">
                Total:
              </td>
              <td>{convertMoney(DataCart.total)} VND</td>
            </tr>
          </tfoot>
        </table>
        {/* <form action="" method="post" onSubmit={handldePost} encType="multipart/form-data" >
          <div className="mb-3">
            <label htmlFor="disabledSelect" className="form-label">Chon phuong thuc thanh toan</label>
            <select id="disabledSelect" className="form-select" name='categoryId' required onChange={(e) => setPay(e.target.value)}>

              {convertedPayment.map((option) => (
                <option value={option.label}>{option.value}</option>
              ))}
            </select>
          </div> */}
          <button type='submit' className='btn btn-primary' disabled={disabled} onClick={() => handldePost()}>Đặt hàng</button>
      
      </div>
    </div>
  );
};

export default Cart;
