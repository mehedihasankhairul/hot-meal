import React from 'react';
import meal from '../images/chicken.jpg';


const Product = () => {
    return (


            <div className="bg-gray-100 rounded-lg">
                <img className="w-full rounded-full " src={meal} alt="Meal" />
                <div className="">
                    <h2 className="text-lg font-bold py-2 rounded-full">Chicken Salad Roast</h2>
                    <span className="bg-gray-200 py-1 rounded-full text-sm px-4">Full Meal</span>
                </div>
                <div className=" flex justify-between items-center mt-4">
                    <span className="font-bold ml-5">$10</span>
                    <button className=" bg-yellow-500 py-1 px-4 rounded-full font-bold hover:bg-green-700">ADD TO CART</button>
                </div>
            </div>


    );
};

export default Product;