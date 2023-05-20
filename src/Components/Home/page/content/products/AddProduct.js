import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { gettAllCategory } from '../../../../../redux/apis/categoryApi';
import { postProduct } from '../../../../../redux/apis/productApi'

function AddProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [brand, setBrand] = useState('');
    const [color, setColor] = useState('');
    const [inventory, setInventory] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [productImage, setProductImage] = useState('');

    useEffect(() => {
        gettAllCategory(dispatch)
    }, [])
    const category = useSelector((state) => state.category.categorys?.allCategory);

    const convertedData = category.map(obj => ({ label: obj.id, value: obj.name }));

    // debugger
    const handlePost = (e) => {
        e.preventDefault();
        const newPro = {
            name,
            description,
            price,
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

        postProduct(formData, newPro,dispatch, navigate);
    };

    return (
        <main>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h2 className='text-center m-4'>Add Product</h2>
                        <form action="" method="post" onSubmit={handlePost} encType="multipart/form-data" >
                            <div className='mb-3'>
                                <label htmlFor='Name' className='form-label'>Name</label>
                                <input type={"text"} className="form-control" placeholder='Enter name' name='name' required onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='Description' className='form-label'>Description</label>
                                <input type={"text"} className="form-control" placeholder='Enter description' name='description' required onChange={(e) => setDescription(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='Price' className='form-label'>Price</label>
                                <input type={"number"} className="form-control" placeholder='Enter price' name='price' required onChange={(e) => setPrice(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='Brand' className='form-label'>Brand</label>
                                <input type={"text"} className="form-control" placeholder='Enter brand' name='brand' required onChange={(e) => setBrand(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='Color' className='form-label'>Color</label>
                                <input type={"text"} className="form-control" placeholder='Enter color' name='color' required onChange={(e) => setColor(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='Inventory' className='form-label'>Inventory</label>
                                <input type={"number"} className="form-control" placeholder='Enter inventory' name='inventory' required onChange={(e) => setInventory(e.target.value)} />
                            </div>
                            {/* <div className='mb-3'>
                                <label htmlFor='Category' className='form-label'>Category</label>
                                <input type={"text"} className="form-control" placeholder='Enter category' name='categoryId' required onChange={(e) => setCategoryId(e.target.value)} />
                            </div> */}
                            <div className="mb-3">
                                <label htmlFor="disabledSelect" className="form-label">Disabled select menu</label>
                                <select id="disabledSelect" className="form-select" name='categoryId' required onChange={(e) => setCategoryId(e.target.value)}>

                                    {convertedData.map((option) => (
                                        <option value={option.label}>{option.value}</option>
                                    ))}

                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formFileMultiple" className="form-label">Product Image</label>
                                <input className="form-control" type="file" id="formFileMultiple" name='productImage' multiple onChange={(e) => setProductImage(e.target.files[0])} />
                            </div>
                            <button type='submit' className='btn btn-primary'>Save</button>
                            <Link to='/product' className='btn btn-outline-danger mx-2'>Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AddProduct