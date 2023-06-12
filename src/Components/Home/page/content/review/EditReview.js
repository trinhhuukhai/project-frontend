import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { gettAllCategory } from '../../../../../redux/apis/categoryApi';
import { editProduct, getIdProduct, gettAllProduct, postProduct } from '../../../../../redux/apis/productApi'
import { editReview, getIdReview, gettAllReview } from '../../../../../redux/apis/reviewApi';

function EditReview() {
    const { id } = useParams()
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [content, setContent] = useState('');

   



    useEffect(() => {
        getIdReview(id, dispatch)
        // gettAllReview(dispatch)
        gettAllProduct(dispatch)
    }, [id, dispatch])

    const data = useSelector((state) => state.review?.getIdReview.data);
   

    useEffect(() => {
        if (data) {
            setContent(data.content) 
        }
    }, [data])


    const handlePost = (e) => {
        e.preventDefault();
        const newReview = {
            content,
        };
        editReview(id, newReview, dispatch, navigate);
        
    };



    return (
        <main>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h2 className='text-center m-4'>Sửa đánh giá sản phẩm</h2>
                        <form action="" method="post" onSubmit={handlePost} encType="multipart/form-data" >
                            <div className='mb-3'>
                                <label htmlFor='content' className='form-label'>Nội dung</label>
                                <input type={"text"} className="form-control" placeholder='Enter content' value={content} name='content' required onChange={(e) => setContent(e.target.value)} />
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

export default EditReview