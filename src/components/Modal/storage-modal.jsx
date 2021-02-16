import React, { useState, useEffect } from 'react'
import _ from "lodash";
import Modal from 'react-modal';
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import CurrencyFormat from 'react-currency-format';

const customStyles = {
    content: {
        top: '50%',
        transform: 'translateY(-50%)'
    },
    overlay: {
        backgroundColor: 'rgba(77,77,77,0.6)',
        zIndex: '10000'
    }
};

Modal.setAppElement('#root');

const StorageModal = ({ modalIsOpen, close, product }) => {
    const [storageSize, setStorageSize] = useState('8GB');
    const [storagePrice, setStoragePrice] = useState(product.storageprice && product.storageprice.eight);
    const [color, setColor] = useState('Black');

    const handleOptionChange = (e) => {
        setStorageSize(e.target.value);
    };

    const changeColor = (e) => {
        setColor(e.target.value);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        if (storageSize === '8GB') {
            setStoragePrice(product.storageprice && product.storageprice.eight)
        } else if (storageSize === '16GB') {
            setStoragePrice(product.storageprice && product.storageprice.sixteen)
        } else if (storageSize === '32GB') {
            setStoragePrice(product.storageprice && product.storageprice.thirtytwo)
        }
        else if (storageSize === '64GB') {
            setStoragePrice(product.storageprice && product.storageprice.sixtyfour)
        } else if (storageSize === '128GB') {
            setStoragePrice(product.storageprice && product.storageprice.onetwentyeight)
        }
        else if (storageSize === '256GB') {
            setStoragePrice(product.storageprice && product.storageprice.twofiftysix)
        }
        else if (storageSize === '512GB') {
            setStoragePrice(product.storageprice && product.storageprice.fivetwelve)
        }
        else if (storageSize === '1TB') {
            setStoragePrice(product.storageprice && product.storageprice.onetb)
        }

    }, [storageSize])

    const addToCart = () => {
        let cart = [];

        if (typeof window !== "undefined") {
            if (localStorage.getItem("cart")) {
                cart = JSON.parse(localStorage.getItem("cart"));
            }

            const cartItems = {
                id: product._id,
                title: product.title,
                images: product.images[0].url,
                price: product.price,
                discount: product.discount,
                discountprice: product.discountprice,
                countInStock: product.countInStock,
                storageSize,
                storagePrice,
                color
            }

            cart.push(cartItems);

            let unique = _.uniqWith(cart, _.isEqual);
            localStorage.setItem("cart", JSON.stringify(unique));

            dispatch({
                type: "ADD_TO_CART",
                payload: unique,
            });
            toast("Product Added To Cart Successfully");
            close();
        }

    }


    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={close}
            style={customStyles}
            contentLabel="Login Modal"
            className="modal-dialog modal-dialog-centered"
            id="login-modal" >
            <div className="modal-content">
                <div className="modal-body">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={close}>
                        <span aria-hidden="true"><i className="icon-close"></i></span>
                    </button>
                    <div class="text-center text-success mb-2">
                        <i class="las la-check-circle la-3x"></i>
                        <h3>Select Storage Capacity and Color</h3>
                    </div>
                    <div class="row no-gutters">
                        <div class="col-sm-2">
                            <div class="opacity-50 my-2">Storage Capacity: {storageSize}</div>
                        </div>
                        <div class="col-sm-10">
                            <div class="aiz-radio-inline">
                                <label class="aiz-megabox pl-0 mr-2">
                                    <input type="radio" name="storage" value="8GB" onChange={handleOptionChange} />
                                    <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center py-2 px-3 mb-2">
                                        8GB
         </span>
                                </label>
                                <label class="aiz-megabox pl-0 mr-2">
                                    <input type="radio" name="storage" value="16GB" onChange={handleOptionChange} />
                                    <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center py-2 px-3 mb-2">
                                        16GB
         </span>
                                </label>
                                <label class="aiz-megabox pl-0 mr-2">
                                    <input type="radio" name="storage" value="32GB" onChange={handleOptionChange} />
                                    <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center py-2 px-3 mb-2">
                                        32GB
         </span>
                                </label>
                                <label class="aiz-megabox pl-0 mr-2">
                                    <input type="radio" name="storage" value="64GB" onChange={handleOptionChange} />
                                    <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center py-2 px-3 mb-2">
                                        64GB
         </span>
                                </label>
                                <label class="aiz-megabox pl-0 mr-2">
                                    <input type="radio" name="storage" value="128GB" onChange={handleOptionChange} />
                                    <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center py-2 px-3 mb-2">
                                        128GB
         </span>
                                </label>
                                <label class="aiz-megabox pl-0 mr-2">
                                    <input type="radio" name="storage" value="256GB" onChange={handleOptionChange} />
                                    <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center py-2 px-3 mb-2">
                                        256GB
         </span>
                                </label>
                                <label class="aiz-megabox pl-0 mr-2">
                                    <input type="radio" name="storage" value="512GB" onChange={handleOptionChange} />
                                    <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center py-2 px-3 mb-2">
                                        512GB
         </span>
                                </label>
                                <label class="aiz-megabox pl-0 mr-2">
                                    <input type="radio" name="storage" value="1TB" onChange={handleOptionChange} />
                                    <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center py-2 px-3 mb-2">
                                        1TB
         </span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row no-gutters pb-3" id="chosen_price_div">
                        <div class="col-sm-2">
                        </div>
                        <div class="col-sm-10">
                            <div class="product-price">
                                
                                {storagePrice ? <strong id="chosen_price" class="h4 fw-600 text-primary">{storageSize} : UGX  <CurrencyFormat
                                    value={storagePrice}
                                    displayType="text"
                                    thousandSeparator
                                /></strong>: <strong id="chosen_price" class="h4 fw-600 text-primary">
                                    Storage Capacity Out of Stock !!
                                    </strong>}
                            </div>
                        </div>
                    </div>

                    <div class="row no-gutters">
                        <div class="col-sm-2">
                            <div class="opacity-50 my-2">Color: {color}</div>
                        </div>
                        <div class="col-sm-10">
                            <div class="aiz-radio-inline">
                                <label class="aiz-megabox pl-0 mr-2" data-toggle="tooltip" data-title="Black">
                                    <input type="radio" name="color" value="Black" onChange={changeColor} />
                                    <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center p-1 mb-2">
                                        <span class="size-30px d-inline-block rounded" style={{ background: '#000000' }}></span>
                                    </span>
                                </label>
                                <label class="aiz-megabox pl-0 mr-2" data-toggle="tooltip" data-title="Coral">
                                    <input type="radio" name="color" value="Silver" onChange={changeColor} />
                                    <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center p-1 mb-2">
                                        <span class="size-30px d-inline-block rounded" style={{ background: '#FF7F50' }}></span>
                                    </span>
                                </label>
                                <label class="aiz-megabox pl-0 mr-2" data-toggle="tooltip" data-title="Red">
                                    <input type="radio" name="color" value="Red" onChange={changeColor} />
                                    <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center p-1 mb-2">
                                        <span class="size-30px d-inline-block rounded" style={{ background: '#FF0000' }}></span>
                                    </span>
                                </label>
                                <label class="aiz-megabox pl-0 mr-2" data-toggle="tooltip" data-title="White">
                                    <input type="radio" name="color" value="White" onChange={changeColor} />
                                    <span class="aiz-megabox-elem rounded d-flex align-items-center justify-content-center p-1 mb-2">
                                        <span class="size-30px d-inline-block rounded" style={{ background: '#FFFFFF' }}></span>
                                    </span>
                                </label>

                            </div>
                        </div>
                    </div>

                    <div class="text-center">
                        <button class="btn btn-outline-primary mb-3 mb-sm-0 mr-3" onClick={close}>Cancel</button>
                        <button class="btn btn-primary mb-3 mb-sm-0" onClick={addToCart}>Add To Cart</button>
                    </div>

                </div>
            </div>
        </Modal>
    )
}

export default StorageModal
