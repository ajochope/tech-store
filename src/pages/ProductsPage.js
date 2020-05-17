import React from 'react';
import Products from '../components/ProductsPage/Products';
import Hero from '../components/Hero';
import producstBcg from '../images/productsBcg.jpeg';

export default function ProductsPage() {
    return (
        <>
            <Hero img={producstBcg}></Hero>
            <Products></Products>
        </>
    )
}