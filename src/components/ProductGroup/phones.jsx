import React ,{useState}from 'react'
import Product from '../../components/Product'
import BrandNew from './brand-new';
import UkUsed from './uk-used';

const Phones = ({ products }) => {
    const [currentTab, setCurrentTab] = useState('brandnew');

    const renderView = () => {
        if (currentTab === 'brandnew') {
            return <BrandNew products={products} />;
        }
        if (currentTab === 'ukused') {
            return <UkUsed products={products} />;
        }
    }

    const textstyle={
        fontSize:"12px",
    }

    return(
        <>
        <div className="container" style={{backgroundColor:"white"}} >
          <div className="row">

            <div className="col-6 col-md-6 col-lg-6">
              <a href="#" className={currentTab === 'brandnew' ? 'select' : 'tabtext'}
                onClick={() => setCurrentTab('brandnew')} style={textstyle}>Brand New</a>
            </div>
            <div className="col-6 col-md-6 col-lg-6">
              <a href="#" className={currentTab === 'ukused' ? 'select' : 'tabtext'} onClick={() => setCurrentTab('ukused')} style={textstyle}>UK Used</a>
            </div>
          </div>
        </div>
        <div className="">
          {renderView()}
        </div>
        </>
    )


}

export default Phones
