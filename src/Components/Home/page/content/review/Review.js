import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { deleteReview, gettAllReview } from '../../../../../redux/apis/reviewApi';

function Review() {
  const dispatch = useDispatch()
  const review = useSelector((state) => state.review?.allReview.response);



  useEffect(() => {
    loadALl();
  }, []);
 
  
  const deleteCus = async (id) => {
    await deleteReview(id, dispatch);
    loadALl();
  };

  const loadALl = async () => {
    await gettAllReview(dispatch)
  };



  return (
    <main>
      <Link to="/review/add"><p>Thêm đánh giá</p></Link>
      <div className='conatiner'>
        <div className='py-4'>
          <table className="table border">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên khách hàng</th>
                <th scope="col">1-5 *</th>
                <th scope="col">Nội dung</th>
                <th scope="col">Tên sản phẩm</th>
               
                <th scope="col">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {
                Array.isArray(review) && review.map((rev, index) => (
                  <tr key={index}>
                    <th scope='row'>{index + 1}</th>
                    <td>{rev.customerName}</td>
                    <td>{rev.rating}</td>
                    <td>{rev.content}</td>
                    <td>{rev.product.name}</td>
                  
                    <td>
                      <button className='btn btn-primary mx-2'>Xem chi tiết</button>
                      <Link to={`/review/edit/${rev.id}`} className='btn btn-outline-primary mx-2'>Sửa</Link>
                      <button className='btn btn-danger mx-2' onClick={() => { deleteCus(rev.id) }}>Xóa</button>

                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>


      </div>
    </main>

  )
}

export default Review