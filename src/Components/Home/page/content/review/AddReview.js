import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { gettAllCategory } from '../../../../../redux/apis/categoryApi';
import { gettAllProduct, postProduct } from '../../../../../redux/apis/productApi'
import { postReview } from '../../../../../redux/apis/reviewApi';

function AddReview() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [content, setContent] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [rating, setRating] = useState('');
    const [productId, setProductId] = useState('');


    useEffect(() => {
        gettAllProduct(dispatch)
    }, [])

    const product = useSelector((state) => state.product.products?.allProduct.data);
    // debugger
    const convertedData = Array.isArray(product) && product.map(obj => ({ label: obj.id, value: obj.name }));

    // debugger
    const handlePost = (e) => {
        e.preventDefault();
        const newReview = {
            content,
            customerName,
            rating,
            productId,
        };
        postReview(newReview,dispatch, navigate);
    };

    return (
        <main>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h2 className='text-center m-4'>Thêm mới nhận xét</h2>
                        <form action="" method="post" onSubmit={handlePost} >
                            <div className='mb-3'>
                                <label htmlFor='content' className='form-label'>Nội dung</label>
                                <input type={"text"} className="form-control" placeholder='Enter review' name='content' required onChange={(e) => setContent(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='customerName' className='form-label'>Tên khách hàng</label>
                                <input type={"text"} className="form-control" placeholder='Enter customer Name' name='customerName' required onChange={(e) => setCustomerName(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='rating' className='form-label'>Đánh giá 1-5 *</label>
                                <input type={"number"} className="form-control" placeholder='Enter rating' name='rating' required onChange={(e) => setRating(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="disabledSelect" className="form-label">Chọn sản phẩm đánh giá</label>
                                <select id="disabledSelect" className="form-select" name='productId' required onChange={(e) => setProductId(e.target.value)}>
                                    
                                    {Array.isArray(convertedData) && convertedData.map((option) => (
                                        <option value={option.label}>{option.value}</option>
                                    ))}

                                </select>
                            </div>
                            <button type='submit' className='btn btn-primary'>Lưu</button>
                            <Link to='/review' className='btn btn-outline-danger mx-2'>Hủy</Link>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AddReview