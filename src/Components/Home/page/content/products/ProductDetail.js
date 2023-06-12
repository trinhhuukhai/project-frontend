import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { deleteImage, getIdProduct } from '../../../../../redux/apis/productApi';
import { deleteReview, gettAllReview } from '../../../../../redux/apis/reviewApi';

function ProductDetail() {
    const dispatch = useDispatch()
    const { id } = useParams()

    const product = useSelector(state => state.product.products?.getIdProduct.data)
    const review = useSelector((state) => state.review?.allReview.data);

    

    useEffect(() => {
        loadALl()
        loadreview()
    }, [id, dispatch])

    const deleteCus = async (id) => {
        await deleteImage(id, dispatch);
        loadALl();
    };
    const loadALl = async () => {
        await getIdProduct(id, dispatch)

    };

    const loadreview = async () => {
        await gettAllReview(id, dispatch)
    };

    const deletereview = async (id) => {
        await deleteReview(id, dispatch);
        loadreview();
    };



    return (
        <main>
            <h2 className='text-center m-4'>Thông tin chi tiết sản phẩm</h2>
            <Link to={`/product/add-image/${product.id}`} className='btn btn-primary mx-2'>Thêm ảnh sản phẩm</Link>
            <Link to={`/product/add-review/${product.id}`} className='btn btn-primary mx-2'>Thêm đánh giá sản phẩm</Link>

            <div className='conatiner'>
                <div className='py-4'>
                    <table className="table border">
                        <thead>
                            <tr>
                                <th scope="col">#</th>

                                <th scope="col">Danh sách hình ảnh sản phẩm</th>
                                {/* <th scope="col">Category name</th> */}
                                <th scope="col">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Array.isArray(product.productImageList) && product.productImageList.map((pro, index) => (
                                    <tr key={index}>
                                        <th scope='row'>{index + 1}</th>

                                        <td><img alt='' src={pro.url} style={{ width: '100px', height: '100px' }} /></td>
                                        {/* <td>{pro.category.name}</td> */}
                                        <td>
                                            <button className='btn btn-danger mx-2' onClick={() => { deleteCus(pro.id) }}>Xóa</button>

                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
                <div className='py-4'>
                    <table className="table border">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Họ tên</th>
                               
                                <th scope="col">Nội dung</th>


                                <th scope="col">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Array.isArray(review) && review.map((rev, index) => (
                                    <tr key={index}>
                                        <th scope='row'>{index + 1}</th>
                                        <td>{rev.user.name}</td>
                                        <td>{rev.content}</td>
                                     

                                        <td>
                                            <Link to={`/product/review/edit/${rev.id}`} className='btn btn-outline-primary mx-2'>Sửa</Link>
                                            <button className='btn btn-danger mx-2' onClick={() => { deletereview(rev.id) }}>Xóa</button>

                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <Link to='/product' className='btn btn-outline-danger mx-2'>Hủy</Link>

            </div>
        </main>

    )
}

export default ProductDetail
