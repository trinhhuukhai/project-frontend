import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { gettAllCategory } from '../../../../../redux/apis/categoryApi';
import { editProduct, getIdProduct, gettAllProduct, postProduct } from '../../../../../redux/apis/productApi'
import { editReview, getIdReview, gettAllReview } from '../../../../../redux/apis/reviewApi';

function EditOrder() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [content, setContent] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [rating, setRating] = useState('');
    const [productId, setProductId] = useState('');


    const handlePost = (e) => {
        e.preventDefault();
        const newReview = {
            content,
            customerName,
            rating,
            productId,
        };
        editReview(id, newReview, dispatch, navigate);
    };

    const { id } = useParams()

    useEffect(() => {
        getIdReview(id, dispatch)
        // gettAllReview(dispatch)
        gettAllProduct(dispatch)
    }, [id, dispatch])

    const data = useSelector((state) => state.review.reviews?.getIdReview);
    // debuggers
    const product = useSelector((state) => state.product.products?.allProduct.response);
    const convertedData = Array.isArray(product) && product.map(obj => ({ label: obj.id, value: obj.name }));
    //   debugger
    useEffect(() => {
        if (data) {
            setContent(data.data.content)
            setCustomerName(data.data.customerName)
            setRating(data.data.rating)
            setProductId(data.data.product.id)
        }
    }, [data])

    return (
        <main>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h2 className='text-center m-4'>Add Product</h2>
                        <form action="" method="post" onSubmit={handlePost} encType="multipart/form-data" >
                            <div className='mb-3'>
                                <label htmlFor='content' className='form-label'>Content</label>
                                <input type={"text"} className="form-control" placeholder='Enter content' value={content} name='content' required onChange={(e) => setContent(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='customerName' className='form-label'>customerName</label>
                                <input type={"text"} className="form-control" placeholder='Enter customerName' value={customerName} name='customerName' required onChange={(e) => setCustomerName(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='rating' className='form-label'>rating</label>
                                <input type={"number"} className="form-control" placeholder='Enter rating' value={rating} name='rating' required onChange={(e) => setRating(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="disabledSelect" className="form-label">Disabled select menu</label>
                                <select value={productId} id="disabledSelect" className="form-select" name='productId' required onChange={(e) => setProductId(e.target.value)}>

                                    {convertedData.map((option) => (
                                        <option value={option.label}>{option.value}</option>
                                    ))}

                                </select>
                            </div>
                            <button type='submit' className='btn btn-primary'>Save</button>
                            <Link to='/review' className='btn btn-outline-danger mx-2'>Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default EditOrder