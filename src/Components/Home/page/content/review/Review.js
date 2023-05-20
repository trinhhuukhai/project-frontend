import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { deleteReview, gettAllReview } from '../../../../../redux/apis/reviewApi';

function Review() {
  useEffect(() => {
    loadALl();
  }, []);
  const review = useSelector((state) => state.review.reviews?.allReview.response);

  const dispatch = useDispatch()


  const deleteCus = async (id) => {
    await deleteReview(id, dispatch);
    loadALl();
  };

  const loadALl = async () => {
    await gettAllReview(dispatch)
  };



  return (
    <main>
      <Link to="/review/add"><p>Add Review</p></Link>
      <div className='conatiner'>
        <div className='py-4'>
          <table className="table border">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Rating</th>
                <th scope="col">Content</th>
                <th scope="col">Product name</th>
                <th scope="col">Action</th>
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
                      <button className='btn btn-primary mx-2'>View</button>
                      <Link to={`/review/edit/${rev.id}`} className='btn btn-outline-primary mx-2'>Edit</Link>
                      <button className='btn btn-danger mx-2' onClick={() => { deleteCus(rev.id) }}>Delete</button>

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