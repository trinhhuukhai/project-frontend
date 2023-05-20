import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { deleteShipping, gettAllShipping } from '../../../../../redux/apis/shippingApi';

function Shipping() {
  const shipping = useSelector((state) => state.shipping.shippings?.allShipping);
  const dispatch = useDispatch();

  const deleteCus = async (id) => {
    await deleteShipping(id, dispatch);
    loadALl();
  };

  const loadALl = async () => {
    await gettAllShipping(dispatch);
  };

  useEffect(() => {
    loadALl();
  }, []);

  return (
    <main>
      <Link to="/shipping/add"><span>Add Shipping</span></Link>
      <div className='conatiner'>
        <div className='py-4'>
          <table className="table border">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Shipping Method</th>
                <th scope="col">Shipping Address</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                Array.isArray(shipping) && shipping.map((cus, index) => (
                  <tr key={index}>
                    <th scope='row'>{index + 1}</th>
                    <td>{cus.shippingMethod}</td>
                    <td>{cus.shippingAddress}</td>
                    <td>
                      <button className='btn btn-primary mx-2'>View</button>
                      <Link to={`/shipping/edit/${cus.id}`} className='btn btn-outline-primary mx-2'>Edit</Link>
                      <button className='btn btn-danger mx-2' onClick={() => { deleteCus(cus.id) }}>Delete</button>

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

export default Shipping