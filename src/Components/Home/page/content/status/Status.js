import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { deleteStatus, gettAllStatus } from '../../../../../redux/apis/statusApi';

function Status() {
  const status = useSelector((state) => state.status.statuss?.allStatus);
  const dispatch = useDispatch();

  const deleteCus = async (id) => {
    await deleteStatus(id, dispatch);
    loadALl();
  };

  const loadALl = async () => {
    await gettAllStatus(dispatch);
  };

  useEffect(() => {
    loadALl();
  }, []);

  return (
    <main>
      <Link to="/status/add"><span>Thêm trạng thái đơn hàng</span></Link>
      <div className='conatiner'>
        <div className='py-4'>
          <table className="table border">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Trạng thái đơn hàng</th>
                <th scope="col">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {
                Array.isArray(status) && status.map((sta, index) => (
                  <tr key={index}>
                    <th scope='row'>{index + 1}</th>
                    <td>{sta.name}</td>
                    <td>
                      <button className='btn btn-primary mx-2'>Xem chi tiết</button>
                      <Link to={`/status/edit/${sta.id}`} className='btn btn-outline-primary mx-2'>Sửa</Link>
                      <button className='btn btn-danger mx-2' onClick={() => { deleteCus(sta.id) }}>Xóa</button>

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

export default Status