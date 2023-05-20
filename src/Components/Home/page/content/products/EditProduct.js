import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { gettAllCategory } from '../../../../../redux/apis/categoryApi';
import { editProduct, getIdProduct, postProduct } from '../../../../../redux/apis/productApi'

function EditProduct() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [in_price, setInputPrice] = useState('');
    const [out_price, setOutputPrice] = useState('');
    const [brand, setBrand] = useState('');
    const [color, setColor] = useState('');
    const [inventory, setInventory] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [productImage, setProductImage] = useState('');


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
        };
        const formData = new FormData();
        formData.append("productImage", productImage);
        for (const key in newPro) {
            formData.append(key, newPro[key]);
        }
        // debugger
        editProduct(id, formData, dispatch, navigate);
    };

    const { id } = useParams()

    useEffect(() => {
        getIdProduct(id, dispatch)
        gettAllCategory(dispatch)
    }, [id, dispatch])

    const data = useSelector(state => state.product.products?.getIdProduct)

    const category = useSelector((state) => state.category.categorys?.allCategory);
    const convertedData = category.map(obj => ({ label: obj.id, value: obj.name }));
    //   debugger
    useEffect(() => {
        if (data) {
            setName(data.data.name)
            setDescription(data.data.description)
            setInputPrice(data.data.inputPrice)
            setOutputPrice(data.data.outputPrice)
            setBrand(data.data.brand)
            setColor(data.data.color)
            setInventory(data.data.inventory)
            setCategoryId(data.data.category.id)
        }
    }, [data])

    return (
        <main>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h2 className='text-center m-4'>Chỉnh sửa thông tin sản phẩm</h2>
                        <form action="" method="post" onSubmit={handlePost} encType="multipart/form-data" >
                            <div className='mb-3'>
                                <label htmlFor='Name' className='form-label'>Tên sản phẩm</label>
                                <input type={"text"} className="form-control" placeholder='Enter name' value={name} name='name' required onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='Description' className='form-label'>Mô tả sản phẩm</label>
                                <input type={"text"} className="form-control" placeholder='Enter description' value={description} name='description' required onChange={(e) => setDescription(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='Price' className='form-label'>Giá nhập</label>
                                <input type={"text"} className="form-control" placeholder='Enter price' value={in_price} name='price' required onChange={(e) => setInputPrice(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='Price' className='form-label'>Giá bán</label>
                                <input type={"text"} className="form-control" placeholder='Enter price' value={out_price} name='price' required onChange={(e) => setOutputPrice(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='Brand' className='form-label'>Hãng</label>
                                <input type={"text"} className="form-control" placeholder='Enter brand' value={brand} name='brand' required onChange={(e) => setBrand(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='Color' className='form-label'>Màu sắc</label>
                                <input type={"text"} className="form-control" placeholder='Enter color' value={color} name='color' required onChange={(e) => setColor(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='Inventory' className='form-label'>Số lượng</label>
                                <input type={"text"} className="form-control" placeholder='Enter inventory' value={inventory} name='inventory' required onChange={(e) => setInventory(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="disabledSelect" className="form-label">Chọn danh mục sản phẩm</label>
                                <select value={categoryId} id="disabledSelect" className="form-select" name='categoryId' required onChange={(e) => setCategoryId(e.target.value)}>

                                    {convertedData.map((option) => (
                                        <option value={option.label}>{option.value}</option>
                                    ))}

                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formFileMultiple" className="form-label">Hình ảnh sản phẩm</label>
                                <input className="form-control" type="file" id="formFileMultiple" name='productImage' multiple onChange={(e) => setProductImage(e.target.files[0])} />
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

export default EditProduct