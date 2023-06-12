import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { gettAllCategory } from '../../../../../redux/apis/categoryApi';
import { postProduct } from '../../../../../redux/apis/productApi'

function AddProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.login?.currentUser);

    const shopId = user?.shopId;

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [in_price, setInPrice] = useState('');
    const [out_price, setOutPrice] = useState('');
    const [brand, setBrand] = useState('');
    const [color, setColor] = useState('');
    const [inventory, setInventory] = useState('');
    const [categoryId, setCategoryId] = useState(0);
    const [productImage, setProductImage] = useState('');
    const [sizes, setSizes] = useState([]); // State to store selected sizes

    useEffect(() => {
        gettAllCategory(dispatch);
    }, []);

    const category = useSelector((state) => state.category.categorys?.allCategory);

    const convertedData = Array.isArray(category) && category.map(obj => ({ label: obj.id, value: obj.name }));

    const handlePost = (e) => {
        e.preventDefault();
        const newPro = {
            name,
            description,
            in_price,
            out_price,
            brand,
            color,
            inventory,
            categoryId,
            shopId
        };
        const formData = new FormData();
        formData.append("productImage", productImage);
        for (const key in newPro) {
            formData.append(key, newPro[key]);
        }
        // Append selected sizes to formData
        sizes.forEach((size) => {
            formData.append('size', size);
        });

        postProduct(formData, newPro, dispatch, navigate);
       
    };

    // Handle checkbox selection
    const handleSizeChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSizes((prevSizes) => [...prevSizes, value]);
        } else {
            setSizes((prevSizes) => prevSizes.filter((size) => size !== value));
        }
    };

    return (
        <main>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h2 className='text-center m-4'>Thêm mới sản phẩm</h2>
                        <form action="" method="post" onSubmit={handlePost} encType="multipart/form-data" >
                            <div className='mb-3'>
                                <label htmlFor='Name' className='form-label'>Tên sản phẩm</label>
                                <input type={"text"} className="form-control" placeholder='Enter name' name='name' required onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='Description' className='form-label'>Mô tả sản phẩm</label>
                                <input type={"text"} className="form-control" placeholder='Enter description' name='description' required onChange={(e) => setDescription(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='Price' className='form-label'>Giá nhập</label>
                                <input type={"number"} className="form-control" placeholder='Enter price' name='price' required onChange={(e) => setInPrice(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='Price' className='form-label'>Giá bán</label>
                                <input type={"number"} className="form-control" placeholder='Enter price' name='price' required onChange={(e) => setOutPrice(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='Brand' className='form-label'>Hãng</label>
                                <input type={"text"} className="form-control" placeholder='Enter brand' name='brand' required onChange={(e) => setBrand(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='Color' className='form-label'>Màu sắc</label>
                                <input type={"text"} className="form-control" placeholder='Enter color' name='color' required onChange={(e) => setColor(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='Inventory' className='form-label'>Số lượng</label>
                                <input type={"number"} className="form-control" placeholder='Enter inventory' name='inventory' required onChange={(e) => setInventory(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='Sizes' className='form-label'>Kích thước</label>
                                <div>
                                    <label className='me-3'>
                                        <input className='me-2' type='checkbox' value='S' onChange={handleSizeChange} />
                                        S
                                    </label>
                                    <label className='me-3'>
                                        <input className='me-2' type='checkbox' value='M' onChange={handleSizeChange} />
                                        M
                                    </label>
                                    <label className='me-3'>
                                        <input className='me-2' type='checkbox' value='L' onChange={handleSizeChange} />
                                        L
                                    </label>
                                    <label className='me-3'>
                                        <input className='me-2' type='checkbox' value='XL' onChange={handleSizeChange} />
                                        XL
                                    </label>
                                    {/* Add more sizes as needed */}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="disabledSelect" className="form-label">Chọn danh mục sản phẩm</label>
                                <select id="disabledSelect" className="form-select" name='categoryId' required onChange={(e) => setCategoryId(e.target.value)}>

                                    {Array.isArray(convertedData) && convertedData.map((option) => (
                                        <option value={option.label}>{option.value}</option>
                                    ))}

                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formFileMultiple" className="form-label">Hình ảnh sản phẩm</label>
                                <input className="form-control" type="file" id="formFileMultiple" name='productImage' required multiple onChange={(e) => setProductImage(e.target.files[0])} />
                            </div>
                            <button type='submit' className='btn btn-primary'>Lưu</button>
                            <Link to='/product' className='btn btn-outline-danger mx-2'>Hủy</Link>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AddProduct