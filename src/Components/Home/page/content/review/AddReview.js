import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { gettAllCategory } from '../../../../../redux/apis/categoryApi';
import { gettAllProduct, postProduct } from '../../../../../redux/apis/productApi'
import { postReview } from '../../../../../redux/apis/reviewApi';

function AddReview() {
    const { id } = useParams()
    const userId = useSelector((state) => state.auth.login?.getInfo.data.id)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [content, setContent] = useState('');
    const [productId, setProductId] = useState(id);


    useEffect(() => {
        gettAllProduct(dispatch)
    }, [])

    const handlePost = (e) => {
        e.preventDefault();
        const newReview = {
            content,
            productId,
            userId
        };
        postReview(id,newReview,dispatch, navigate);
    };

    return (
        <main>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h2 className='text-center m-4'>Thêm mới đánh giá</h2>
                        <form action="" method="post" onSubmit={handlePost} >
                            <div className='mb-3'>
                                <label htmlFor='content' className='form-label'>Nội dung</label>
                                <input type={"text"} className="form-control" placeholder='Enter review' name='content' required onChange={(e) => setContent(e.target.value)} />
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