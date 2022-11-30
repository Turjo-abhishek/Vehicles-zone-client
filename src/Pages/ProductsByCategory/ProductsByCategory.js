import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const ProductsByCategory = () => {
    const products = useLoaderData();
    return (
      <div className='grid grid-col-1 lg:grid-cols-3 gap-10 my-20'>
        {
            products?.map(product => <ProductCard key={product?._id} product={product}></ProductCard>)
        }
      </div>
    );
};

export default ProductsByCategory;