import React from 'react'
import Banner from './Banner'
import ProductGroupping from '../../components/ProductGroup'
import Footer from '../../components/Layout/Footer/index'
import BottomFooter from '../../components/Layout/Footer/BottomFooter'

const HomePage = () => {
    return (
        <>
            <Banner />
            <ProductGroupping />
            <div class="d-none d-lg-block">
                <Footer/>
                <BottomFooter/>
            
            </div>
        </>
    )
}

export default HomePage