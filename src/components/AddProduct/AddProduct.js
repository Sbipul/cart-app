import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_PRODUCT, generateAction } from '../../redux/actions/action';

const AddProduct = () => {
    const dispatch = useDispatch()
    // const allProducts = useSelector(state=>state.products.products)
    const [product,setProduct] = useState({})
    const createData = (e)=>setProduct({ ...product,[e.target.name]: e.target.value });
    const addProduct = (e)=>{
        e.preventDefault()
        dispatch(generateAction(ADD_PRODUCT,product))
        e.target.reset()
    }
    return (
        <div>
            <div className="formContainer">
            <h4 className="formTitle">Add New Product</h4>
            <form onSubmit={addProduct} className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
                <div className="space-y-2">
                <label htmlFor="lws-inputName">Product Name</label>
                <input onChange={createData} className="addProductInput" name='productName' id="lws-inputName" type="text" required />
                </div>
                <div className="space-y-2">
                <label htmlFor="lws-inputCategory">Category</label>
                <input onChange={createData} className="addProductInput" name='category' id="lws-inputCategory" type="text" required />
                </div>
                <div className="space-y-2">
                <label htmlFor="lws-inputImage">Image Url</label>
                <input onChange={createData} className="addProductInput" name='url' id="lws-inputImage" type="text" required />
                </div>
                <div className="grid grid-cols-2 gap-8 pb-4">
                <div className="space-y-2">
                    <label htmlFor="ws-inputPrice">Price</label>
                    <input onChange={createData} className="addProductInput" name='price' type="number" id="lws-inputPrice" required />
                </div>
                <div className="space-y-2">
                    <label htmlFor="lws-inputQuantity">Quantity</label>
                    <input onChange={createData} className="addProductInput" name='quantity' type="number" id="lws-inputQuantity" required />
                </div>
                </div>
                <button type="submit" id="lws-inputSubmit" className="submit">Add Product</button>
            </form>
            </div>
        </div>
    );
};

export default AddProduct;