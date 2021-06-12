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
            <div class="d-none d-lg-block" style={{marginTop:"-3%"}}>
                <Footer/>
                <BottomFooter/>
            </div>
            <div class="d-sm-none pb-3 mb-5" style={{marginTop:"-13%"}}>
                 <Footer/>
                <BottomFooter/></div>
        </>
    )
}

export default HomePage