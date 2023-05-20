import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getIdOrder, UpdateStatusOrder } from '../../../../../redux/apis/orderApi'
import { gettAllStatus } from '../../../../../redux/apis/statusApi';

function EditOrder() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [statusId, setStatusId] = useState('');

    const handlePost = (e) => {
        e.preventDefault();
        const newReview =  statusId
        UpdateStatusOrder(id, newReview, dispatch, navigate);
    };

    const { id } = useParams()

    useEffect(() => {
        getIdOrder(id, dispatch)
        gettAllStatus(dispatch)
    }, [id, dispatch])

    const order = useSelector((state) => state.order?.getIdOrder.data.orderStatus);
    const status = useSelector((state) => state.status.statuss?.allStatus);
    const convertedData = Array.isArray(status) && status.map(obj => ({ label: obj.id, value: obj.name }));

    useEffect(() => {
        if (order) {
            setStatusId(order.id)
        }
    }, [order])

    const isDisabled = statusId === '3';

    return (
        <main>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h2 className='text-center m-4'>Edit Status Order</h2>
                        <form action="" method="post" onSubmit={handlePost} encType="multipart/form-data" >
                            <div className="mb-3">
                                <label htmlFor="disabledSelect" className="form-label">Disabled select menu</label>
                                <select value={statusId} id="disabledSelect" className="form-select" name='productId' required onChange={(e) => setStatusId(e.target.value)}>
                                    {convertedData.map((option) => (
                                        <option value={option.label}>{option.value}</option>
                                    ))}
                                </select>
                            </div>
                            <button type='submit' className='btn btn-primary' disabled={isDisabled}>Save</button>
                            <Link to='/order' className='btn btn-outline-danger mx-2'>Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default EditOrder
