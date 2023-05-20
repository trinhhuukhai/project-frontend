import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ChangeStatus, getOrderItemByUserId } from '../../../../../redux/apis/orderApi';
import { Link, useNavigate } from 'react-router-dom';
import { convertMoney } from '../../../../../until/Validations';
import { postPayment } from '../../../../../redux/apis/paymentApi';
import { getIdCustomer, getIdUser } from '../../../../../redux/apis/customerApi';

function Coin() {
    const dispatch = useDispatch();
    const userId = localStorage.getItem('id');
    const navigate = useNavigate();

    const user = useSelector((state) => state.customer.customers.getIdCustomer?.data);
    debugger

    useEffect(() => {
        User()
    }, []);

    const User = async () => {
        await getIdCustomer(userId, dispatch);
    };


    return (
        <div className='container'>
            <div>
             Walet
             <div>
                {user.wallet.balance} VND
             </div>
            </div>
            <button className='btn btn-outline-primary mx-2' >
                          nap tien
                        </button>
        </div>
    )
}

export default Coin
