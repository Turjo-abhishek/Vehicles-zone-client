import React from 'react';
import Awards from '../Awards/Awards';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Awards></Awards>
            <Brands></Brands>
        </div>
    );
};

export default Home;