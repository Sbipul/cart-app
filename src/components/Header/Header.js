import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
    const cart = useSelector(state=> state.cart.cart)
    return (
        <nav className="bg-[#171C2A] py-4">
            <div className="navBar">
            <button>
                <img src={require("../../images/logo.png")} alt="LWS" className="max-w-[140px]" />
            </button>

            <div className="flex gap-4">
                <button className="navHome" id="lws-home"> Home </button>
                <button className="navCart" id="lws-cart">
                <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                <span id="lws-totalCart">{cart.length}</span>
                </button>
            </div>
            </div>
        </nav>
    );
};

export default Header;