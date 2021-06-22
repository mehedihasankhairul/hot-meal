import React from 'react';
import Meal from '../images/meal.jpg';
import ProductData from '../components/Products'


const Home = () => {
    return (
        <>
            {/* Header Section */}
            <div className=" hero py-16">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="w-1/2">
                        <h4 className="text-lg "><em>Khuda Lagche?</em></h4>
                        <h1 className="text-3xl md:text-6xl font-bold">Khaben Naki?</h1>
                        <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-600 hover:bg-yellow-800">Order Now</button>
                    </div>
                    <div className="w-1/2 w-4/12 m-10 ">
                        <img className="rounded-full" src={Meal} alt="" />
                    </div>
                </div>
            </div>

            {/* Show Products in Home Pages */}
            <div className="pb-24">
                    <ProductData />
            </div>
        </>
    );
};

export default Home;