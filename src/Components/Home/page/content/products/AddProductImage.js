import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { postProductImage } from '../../../../../redux/apis/productApi';
import { useDispatch } from 'react-redux';

function AddProductImage() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [productImage, setProductImage] = useState('');

    const dispatch = useDispatch()

    const handlePost = (e) => {
        e.preventDefault();
       
        const formData = new FormData();
        formData.append("productId", id)
        formData.append("url", productImage);
       
        // debugger
        postProductImage(id, formData, dispatch, navigate);

    };
    return (
        <main>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h2 className='text-center m-4'>Thêm hình ảnh sản phẩm</h2>
                    <form action="" method="post" onSubmit={handlePost} encType="multipart/form-data" >
                        <div className="mb-3">
                            <label htmlFor="formFileMultiple" className="form-label">Chọn hình ảnh</label>
                            <input className="form-control" type="file" id="formFileMultiple" name='productImage' multiple onChange={(e) => setProductImage(e.target.files[0])} />
                        </div>

                        <button type='submit' className='btn btn-primary'>Lưu</button>
                        <Link to={`/product/detail/${id}`} className='btn btn-primary mx-2'>Hủy</Link>
                    </form>
                </div>
            </div>
        </div>
    </main>
    )
}

export default AddProductImage
