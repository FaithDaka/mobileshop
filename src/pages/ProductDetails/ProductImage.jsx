import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import Modal from 'react-modal';

const customStyles = {
  content: {
      top: '50%',
      // bottom:'-10%',
      transform: 'translateY(-50%)',
      backgroundColor:"white",
      minwidth:'100%',
      minHeight:'100%',
      border:'none',
      height:'auto'
  },
  overlay: {
      // background: 'rgba(0,0,0,.5)',
      backgroundColor:'white',
      zIndex: '10000'
  }
};

const styles={
  marginTop:'-100%',
  marginRight:'5%',
}

const styles2={
  // marginTop:'10%',
  marginRight:'20%'
 
}
const imgstyle={
  marginTop:'-100%',
  paddingTop:'-70%',
}
Modal.setAppElement('#root')

const ProductImage = ({ product }) => {
  const [currentImage, setCurrentImage] = useState("");
  const history = useHistory();
  const auth = useSelector(state => state.auth);

  let location = useLocation();
  let currentUrl = "https://mobileshop.ug" + location.pathname;
  let shareImage = product.images && product.images.length ? product.images[0].url : ''

  const renderImage = () => {
    return (
      <>
      <LazyLoadImage
        class="responsive-img"
        src={currentImage ? currentImage : product.images && product.images.length ? product.images[0].url : ''}
        alt="image-details"
      />
       {product.condition === 'Brand New' ?  <img style={styles} class="float-right" src="/images/warranty3.png" alt="wnty" width="50" height="60" />: ''} &nbsp;
      </>

      
    
    );
  };


  const urlToObject = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const file = new File([blob], { shareImage }, { type: blob.type });
    return file;
  };
  const files = urlToObject({ currentUrl })

  const sharePage = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Checkout this product on mobileshop",
          text: product.title,
          url: document.location.href,
          file: { files }
        })
        .then(() => {
          console.log('Successfully shared');
        })
        .catch(error => {
          console.error('Something went wrong sharing the blog', error);
        });
    }
    console.log(files)
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
   <Modal
      
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      transparent={true}
      contentLabel="Image Modal"
    >
      <button class="float-right" onClick={closeModal}>close</button>

      <div>
      <LazyLoadImage
      class="responsive-img"
      src={currentImage ? currentImage : product.images && product.images.length ? product.images[0].url : ''}
      alt="image-details"
      max-height="auto"
    />
   
      <div class="thumbnail-container" style={{display:'flex', flexDirection:'row', justifyContent:'space-around', paddingTop:'2%'}}>
            {product.images && product.images.length ? product.images.map((thumb, index) =>
              <Link to="#" key={thumb.id}
                onClick={() =>
                  setCurrentImage(
                    index === 0 ? product.images.url : thumb.url
                  )
                }>
                <div class="border  border border-dark p-1 rounded thumbnail-box">
                  <LazyLoadImage
                    class="thumbnail-img"
                    src={index === 0 ? product.images[0].url : thumb.url}
                    alt="thumbnail"
                  />
                </div>
              </Link>
            ) : ''
            }

          </div>
        </div>
      </Modal>


      <div className="row">
        <div className="col-3">
          <div class="d-sm-none thumbnail-container">
            {product.images && product.images.length ? product.images.map((thumb, index) =>
              <Link to="#" key={thumb.id}
                onClick={() =>
                  setCurrentImage(
                    index === 0 ? product.images.url : thumb.url
                  )
                }>
                <div class="border p-1 rounded thumbnail-box">
                  <LazyLoadImage
                    class="thumbnail-img"
                    src={index === 0 ? product.images[0].url : thumb.url}
                    alt="thumbnail"
                  />
                </div>
              </Link>
            ) : ''
            }

          </div>

          <div class="d-none d-md-block thumbnail-container">
            {product.images && product.images.length ? product.images.map((thumb, index) =>
              <Link to="#" key={thumb.id}
                onClick={() =>
                  setCurrentImage(
                    index === 0 ? product.images.url : thumb.url
                  )
                }>
                <div class="border p-1 rounded thumbnail-box">
                  <LazyLoadImage
                    class="thumbnail-img"
                    src={index === 0 ? product.images[0].url : thumb.url}
                    alt="thumbnail"
                  />
                </div>
              </Link>
            ) : ''
            }

          </div>

        </div>
        <div className="col-9" >
          <div className='d-none d-lg-block'>
            {
              product.category && product.category.name === 'Mobile Phones' || product.category && product.category.name === 'Tablets' ?
                <>
                 {product.condition === 'Brand New' ?  <img style={styles2} class="float-right" src="/images/warranty3.png" alt="wnty" width="60" height="70" />: ''} &nbsp;
     
                 <div className="img-box">
                {renderImage()}
                  </div>
                </>
                
                :
                <div className='ml-0 pl-0 pt-2 '>

                  {renderImage()}
                </div>
            }
          </div>
          
          <div class="d-lg-none">
            
            <button type="button" className="mb-3 btn btn-product-call float-right">
              <i class="bi bi-share " onClick={sharePage} >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                </svg>
              </i>
            </button><br></br><br></br><br></br>
            <button type="button" className=" btn btn-product-call float-right" >
              <i class="las la-search-plus la-2x " onClick={openModal}></i>
            </button>

            <div className="img-box"  onClick={openModal}>
           
             {renderImage()}
            </div>

          </div>


        </div>

      </div>
    </>
  )
}

export default ProductImage;