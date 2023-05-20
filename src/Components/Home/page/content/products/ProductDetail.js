import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { deleteImage, deleteProduct, getIdProduct, gettAllProduct, gettAllProductPagination } from '../../../../../redux/apis/productApi';

function ProductDetail() {
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        loadALl()
    }, [id, dispatch])

    const deleteCus = async (id) => {
        await deleteImage(id, dispatch);
        loadALl();
    };
    const loadALl = async () => {
        await getIdProduct(id, dispatch)
        // debugger
    };
    const product = useSelector(state => state.product.products?.getIdProduct.data)
    // debugger

    return (
        <main>
            <h2 className='text-center m-4'>Thêm mới sản phẩm</h2>
            <Link to={`/product/add-image/${product.id}`} className='btn btn-primary mx-2'>Thêm ảnh sản phẩm</Link>

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
                <Link to='/product' className='btn btn-outline-danger mx-2'>Hủy</Link>

            </div>
        </main>

    )
}

export default ProductDetail
