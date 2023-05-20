import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { convertMoney } from '../../../../../until/Validations';
import { getAllStatic, getAllStaticInDate, getAllStaticRangeDate } from '../../../../../redux/apis/staticApi'
import { Link } from 'react-router-dom';
import * as XLSX from 'xlsx';


function Statistical() {

  const dispatch = useDispatch();

  const data = useSelector((state) => state.static?.allStatic);


  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [inDate, setInDate] = useState('')


  const [formattedStartDate, setFormattedStartDate] = useState('');
  const [formattedEndDate, setFormattedEndDate] = useState('');
  const [formattedInDate, setFormattedInDate] = useState('');

  const handleStartDate = (event) => {
    const dateObj = new Date(event.target.value);
    const formattedDate = dateObj.toISOString().slice(0, 10);
    setStartDate(event.target.value);
    setFormattedStartDate(formattedDate);
  };
  const handleEndDate = (event) => {
    const dateObj = new Date(event.target.value);
    const formattedDate = dateObj.toISOString().slice(0, 10);
    setEndDate(event.target.value);
    setFormattedEndDate(formattedDate);
  };
  const handleInDate = (event) => {
    const dateObj = new Date(event.target.value);
    const formattedDate = dateObj.toISOString().slice(0, 10);
    setInDate(event.target.value);
    setFormattedInDate(formattedDate);
  };

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleFilterInDate = async () => {
    await getAllStaticInDate(inDate, dispatch)

  };

  const handleFilter = async () => {
    await getAllStatic(selectedOption, dispatch)
  };

  const handleFilterDate = async () => {
    await getAllStaticRangeDate(startDate, endDate, dispatch)
  };

  const handleExport = () => {
    const worksheet = XLSX.utils.table_to_sheet(document.querySelector('table'));
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'data.xlsx');
  };



  return (
    <main>
      <div className='conatiner'>
        <div className='py-4'>

          <div>
            <label htmlFor="option">Lựa chọn thống kê theo ngày hoặc tháng:</label>
            <select id="option" name="option" value={selectedOption} onChange={handleOptionChange}>
              <option value="">-- Chọn --</option>
              <option value="date">Thống kê theo ngày</option>
              <option value="today">Thống kê trong ngày</option>
              {/* <option value="yesterday">Thống kê ngày hôm qua</option> */}
              <option value="week">Thống kê trong tuần này</option>
              <option value="lastWeek">Thống kê trong tuần trước</option>
              <option value="month">Thống kê trong tháng này</option>
              <option value="previousMonth">Thống kê trong tháng trước</option>
              <option value="rangeDate">Thống kê khác</option>
            </select>
            {selectedOption != 'date' && selectedOption != 'rangeDate' && <button className='btn btn-primary mx-2' disabled={selectedOption == ''} onClick={handleFilter}>Filter</button>
            }
            {selectedOption == 'date' && <div>
              <label className='mt-3' htmlFor="date">Ngày: </label>
              <input className='mx-3'
                type="date"
                id="date"
                name="datetime"
                value={inDate}
                onChange={handleInDate}
              />
              <button disabled={formattedInDate == ''} className='btn btn-primary mx-2' onClick={handleFilterInDate}>Filter</button>
            </div>}
            {selectedOption == 'rangeDate' && <div>
              <label className='mt-3' htmlFor="dateStart">Ngày bắt đầu: </label>
              <input
                type="date"
                id="dateStart"
                name="datetime"
                value={startDate}
                onChange={handleStartDate}
              />

              <label className='mx-2' htmlFor="dateEnd">Ngày kết thúc: </label>
              <input
                type="date"
                id="dateEnd"
                name="datetime"
                value={endDate}
                onChange={handleEndDate}
              />
              <button disabled={formattedStartDate == '' || formattedEndDate == ''} className='btn btn-primary mx-2' onClick={handleFilterDate}>Filter</button>
            </div>}

          </div>
          <button onClick={handleExport}>Export</button>
          <table className="table border">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Ngày</th>
                <th scope="col">Tên khách hàng</th>
                <th scope="col">Địa chỉ</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col">Tiền vốn</th>
                <th scope="col">Tiền đơn hàng</th>
                <th scope="col">Thuế</th>
                <th scope="col">Tổng tiền</th>

              </tr>
            </thead>
            {data != ""

              ?
              <tbody>
                {
                  Array.isArray(data) && data.map((rev, index) => (
                    <tr key={index}>
                      <th scope='row'>{index + 1}</th>
                      <td>{rev.paymentDate}</td>
                      <td>{rev.order.user.name}</td>
                      <td>{rev.order.user.address}</td>
                      <td>{rev.order.user.phone}</td>
                      <td>{rev.order.invest}</td>
                      <td>{rev.order.total}</td>
                      <td>{rev.order.tax}</td>
                      <td>{rev.order.billInvoice}</td>
                    </tr>
                  ))
                }
              </tbody>
              :
              <tbody>
                <th>No data</th>
              </tbody>
            }


          </table>

        </div>
      </div>


    </main>

  )
}

export default Statistical