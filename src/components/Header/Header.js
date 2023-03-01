import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ACTIVE_HOME, DISABLE_HOME, generateAction } from '../../redux/actions/action';

const Header = () => {
    const cart = useSelector(state=> state.cart.cart)
    const totalItems = cart.reduce((total,item)=>item.quantity+total,0)
    const dispatch = useDispatch()
    return (
        <nav className="bg-[#171C2A] py-4">
            <div className="navBar">
            <button>
                <img src={require("../../images/logo.png")} alt="LWS" className="max-w-[140px]" />
            </button>

            <div className="flex gap-4">
                <button onClick={()=>dispatch(generateAction(ACTIVE_HOME,true))} className="navHome" id="lws-home"> Home </button>
                <button onClick={()=>dispatch(generateAction(DISABLE_HOME,false))} className="navCart" id="lws-cart">
                <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                <span id="lws-totalCart">{totalItems}</span>
                </button>
            </div>
            </div>
        </nav>
    );
};

export default Header;