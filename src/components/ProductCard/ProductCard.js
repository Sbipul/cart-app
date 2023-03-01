import React from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TO_CART, generateAction, UPDATE_QUANTITY } from '../../redux/actions/action';

const ProductCard = ({product}) => {

  const dispatch = useDispatch()
  const {productName,id,price,category,quantity,url} = product;
  
    const addToCart = ()=>{
      dispatch(generateAction(ADD_TO_CART,product))
      dispatch(generateAction(UPDATE_QUANTITY,id))
    }
    return (
        <div className="lws-productCard">
          <img className="lws-productImage" src={url} alt="product" />
          <div className="p-4 space-y-2">
            <h4 className="lws-productName">{productName}</h4>
            <p className="lws-productCategory">{category}</p>
            <div className="flex items-center justify-between pb-2">
              <p className="productPrice">BDT <span className="lws-price">{price}</span></p>
              <p className="productQuantity">QTY <span className="lws-quantity">{quantity}</span></p>
            </div>
            <button onClick={addToCart} disabled={quantity===0 && true} className="lws-btnAddToCart">Add To Cart {id}</button>
          </div>
        </div>
    );
};

export default ProductCard;