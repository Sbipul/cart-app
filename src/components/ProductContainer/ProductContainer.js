import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';

const ProductContainer = () => {
    const allProducts = useSelector(state=>state.products.products)
    return (
        <div className="productContainer" id="lws-productContainer">
            {
                allProducts.map((product,i)=>{
                    return <ProductCard key={i} product={product}/>
                })
            }
        </div>
    );
};

export default ProductContainer;