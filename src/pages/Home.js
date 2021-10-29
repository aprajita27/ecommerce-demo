import React from 'react';
import ProdToolBarContainer from '../containers/Home/partial/ProdToolBarContainer'
import ProductsContainer from '../containers/Home/partial/ProductsContainer'
import Slider from '../containers/Home/partial/Slider.jsx'

const Home = (props) => (
    <div>
        <Slider />
        <ProdToolBarContainer />
        <ProductsContainer />
    </div>
)


export default Home