import React from 'react';
import { useSelector } from 'react-redux';
import CartCard from '../CartCard/CartCard';

const CartContainer = () => {
    const cart = useSelector(state=>state.cart.cart);
    return (
        <div className="space-y-6">
            {
                cart.length>0 ? <div>
                {
                    cart.map((cart,i)=><CartCard key={i} cart={cart}/>)
                }
                </div> : <div style={{padding:'10rem',textAlign:'center'}}>
                <h2>No item in cart</h2>
            </div>
            }
        </div>
    );
};

export default CartContainer;