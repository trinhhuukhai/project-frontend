import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { convertMoney } from '../../../../../until/Validations';
import { getAllStatic, getAllStaticInDate, getAllStaticRangeDate } from '../../../../../redux/apis/staticApi'
import { Link } from 'react-router-dom';
import * as XLSX from 'xlsx';
import moment from 'moment/moment';



function Statistical() {

  const dispatch = useDispatch();

  const idShop = useSelector((state) => state.auth.login?.getInfo.data.shop.id)
  const data = useSelector((state) => state.static?.allStatic.data)
  const formattedDate = (originalDate) => moment(originalDate).format('DD-MM-YYYY');


let total = 0;
let invest = 0;

{data != "" && data.forEach(item => {
  total += item.total;
  invest += item.invest;
});}


  const handleExport = () => {
    const worksheet = XLSX.utils.table_to_sheet(document.querySelector('table'));
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'data.xlsx');
  };

  useEffect(() => {
    loadALl();
  }, []);

  const loadALl = async () => {
    await getAllStatic(idShop, dispatch);
  };

  const formattedAmount = (amount) => {
    if (amount) {
      return amount.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
      });
    }
    return '0 đ';
  };

  return (
    <main>
      <div className='conatiner'>
        <div className='py-4'>

          <button type="button" class="btn btn-primary mb-3" onClick={handleExport}>Xuất file</button>
          <table className="table border">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Ngày</th>
                <th scope="col">Tổng tiền</th>
                <th scope="col">Vốn</th>
                <th scope="col">Lợi nhuận</th>

              </tr>
            </thead>
            {data !== ""
              ?
              <tbody>
                {
                  Array.isArray(data) && data.map((rev, index) => (
                    <tr key={index}>
                      <th scope='row'>{index + 1}</th>
                      <td>{formattedDate(rev.orderDate)}</td>
                      <td>{formattedAmount(rev.total)}</td>
                      <td>{formattedAmount(rev.invest)}</td>
                      <td>{formattedAmount(rev.total - rev.invest)}</td>
                    </tr>
                  ))
                }
              </tbody>
              :
              <tbody>
                <th>Chưa có doanh thu</th>
              </tbody>
            }
            <tfoot>
            <tr>
              <td colSpan="2" className="">
             Tổng
              </td>
              <td>
              {formattedAmount(total)}
              </td>
              <td>
              {formattedAmount(invest)}
              </td>
              <td>
              {formattedAmount(total - invest)}
              </td>
            </tr>
          </tfoot>


          </table>

        </div>
      </div>


    </main>

  )
}

export default Statistical