import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { deleteCustomer, gettAllCustomer } from '../../../../../redux/apis/customerApi'

function Customer() {
  const customer = useSelector((state) => state.customer.customers?.allCustomer);
  const dispatch = useDispatch();

  const deleteCus = async (id) => {
    await deleteCustomer(id, dispatch);
    loadALl();
  };

  const loadALl = async () => {
    await gettAllCustomer(dispatch);
  };

  useEffect(() => {
    loadALl();
  }, []);

  return (
    <main>
      <Link to="/customer/add"><span>Add customer</span></Link>
      <div className='conatiner'>
        <div className='py-4'>
          <table className="table border">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                Array.isArray(customer) && customer.map((cus, index) => (
                  <tr key={index}>
                    <th scope='row'>{index + 1}</th>
                    <td>{cus.name}</td>
                    <td>{cus.email}</td>
                    <td>{cus.phone}</td>
                    <td>{cus.address}</td>
                    <td>
                      <button className='btn btn-primary mx-2'>View</button>
                      <Link to={`/customer/edit/${cus.id}`} className='btn btn-outline-primary mx-2'>Edit</Link>
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

export default Customer