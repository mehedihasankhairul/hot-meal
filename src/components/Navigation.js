import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/hot-meal.jpg';
import Cart from '../images/cart.png';

const Navigation = () => {

    const cartStyle = {
        background: "orange",
        padding: '6px 12px',
        display: 'flex',
        borderRadius: '50px',

    }

    return (
        <>
            <nav className="container mx-auto flex items-center justify-between py-4">

                <Link to="/">
                    <img
                        style={{ height: 55 }}
                        src={logo}
                        alt="Logo"
                    />
                </Link>
                <ul className="flex items-center">
                    <li >
                        <Link to="/">Home</Link>
                    </li>
                    <li className="ml-6">
                        <Link to="/products">Products</Link></li>
                    <li className="ml-6 ">
                        <Link to="/cart">
                            <div style={cartStyle} className="">
                                <span className="">50</span>
                                <img className="w-8" src={Cart} alt="item-cart" />
                            </div>
                        </Link>

                    </li>
                </ul>

            </nav>
        </>
    );
};

export default Navigation;