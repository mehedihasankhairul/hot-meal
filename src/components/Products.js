import React, { useEffect, useState } from 'react';
// import meal from '../images/chicken.jpg';
import Product from './Product';
// import Products from '../pages/Products';


const Products = () => {


    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken`)
            .then(res => res.json())
            .then(products => {
                console.log(products);
                setProducts(products);
                
            })
    }, []);

    return (
        <div className="container mx-auto pb-24">
            <h1 className=" text-3xl md:text-4xl font-bold my-8 hover:underline hover:bg-gray-200 rounded-full"> Products </h1>

            <div className="grid grid-cols-4  my-8 gap-24">
                
          
               
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
                
            </div>


        </div>
    );
};

export default Products;