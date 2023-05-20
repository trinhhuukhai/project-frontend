import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ChangeStatus, getOrderItemByUserId } from '../../../../../redux/apis/orderApi';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { convertMoney } from '../../../../../until/Validations';
import { postPayment } from '../../../../../redux/apis/paymentApi';

function Payment() {
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const order = useSelector((state) => state.cart.carts?.postOrderItem.data);
  // debugger


  const handldePost = async (id) => {
    // e.preventDefault();
    const newPay = {
      orderId: id
    }
    await postPayment(newPay, dispatch, navigate);
    
  }


  return (
    <div className='container'>
      <div>
        <table className="table">
          <thead>
            <tr>
            
              <th scope="col">Giá trị đơn hàng</th>
              <th scope="col">Thuế</th>
              <th scope="col">Tổng tiền</th>
              {/* <th scope="col">Giá trị đơn hàng</th> */}
              {/* <th scope="col">Thuế</th>
              <th scope="col">Tổng tiền</th> */}
              <th scope="col">Hành động</th>
            </tr>
          </thead>
          <tbody>
         
            
                <tr>
                 
                  <td>{order.total}</td>
                  <td>{order.tax}</td>
                  <td>{order.billInvoice}</td>
                  {/* <td>{rev.order.tax}</td>
                  <td>{rev.order.billInvoice}</td> */}
                  <td>
                  <button className='btn btn-outline-primary mx-2' onClick={() => handldePost(order.id)}>
                          Thanh toán
                        </button>
                  </td>

                </tr>
              
            
          </tbody>
        </table>
      </div>


    </div>
  )
}

export default Payment
