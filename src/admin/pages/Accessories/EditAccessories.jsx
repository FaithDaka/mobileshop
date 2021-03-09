import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import Resizer from "react-image-file-resizer";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Spinner from '../../../components/Spinner'
import { updateAccessory, getAccessory } from "../../../functions/accessory";

const EditAccessory = ({ match, history }) => {
    const auth = useSelector(state => state.auth);
    const { id } = match.params;

    const [loading, setLoading] = useState(false);
    const [imgloading, setImgLoading] = useState(false);

    const [title, setTitle] = useState('');
    const [discountprice, setDiscountPrice] = useState('');
    const [price, setPrice] = useState('');
    const [brand, setBrand] = useState('');
    const [color, setColor] = useState('');
    const [images, setImages] = useState([]);
    const [specs, setSpecs] = useState('');

    const loadAccessory = () => {
        setLoading(true);
        getAccessory(id).then((p) => {
            console.log("Accessory ===>", p)
            setLoading(false);
            setTitle(p.data.title)
            setPrice(p.data.price)
            setDiscountPrice(p.data.discountprice);
            setBrand(p.data.brand);
            setColor(p.data.color);
            setImages(p.data.images);
            setSpecs(p.data.specs);
        });
    };

    const fileUploadAndResize = (e) => {
        let files = e.target.files; // 3
        let allUploadedFiles = images;

        if (files) {
            setImgLoading(true);
            for (let i = 0; i < files.length; i++) {
                Resizer.imageFileResizer(
                    files[i],
                    720,
                    720,
                    "JPEG",
                    100,
                    0,
                    (uri) => {
                        console.log(uri);
                        axios
                            .post(
                                `${process.env.REACT_APP_API}/upload`,
                                { image: uri }
                            )
                            .then((res) => {
                                setImgLoading(false);
                                allUploadedFiles.push(res.data);
                                setImages(allUploadedFiles)
                            })
                            .catch((err) => {
                                setImgLoading(false);
                                toast.error("error upload Failure");
                            });
                    },
                    "base64"
                );
            }
        }
    };

    const handleImageRemove = (public_id) => {
        setImgLoading(true);
        axios
            .post(
                `${process.env.REACT_APP_API}/upload/remove`, { public_id }
            )
            .then((res) => {
                setImgLoading(false);
                const filteredImages = images.filter((item) => item.public_id !== public_id);
                setImages(filteredImages)
            })
            .catch((err) => {
                console.log(err);
                setImgLoading(false);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const data = {
            title: title,
            price: price,
            discountprice: discountprice,
            color: color,
            images: images,
            specs: specs,
            brand: brand
        }

        updateAccessory(id, data, auth.token)
            .then((res) => {
                setLoading(false);
                history.push('/admin/listaccessories')
                toast.success(res.data.message);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
                toast.error("Error while creating accessory");
            });
    };

    useEffect(() => {
        loadAccessory();
    }, []);

    return (
        <>
            <div class="aiz-titlebar text-left mt-2 mb-3">
                <h5 class="mb-0 h6">Edit Accesssory</h5>
            </div>
            <div class="col-md-10 mx-auto">
                <form class="form form-horizontal mar-top" onSubmit={handleSubmit}>
                    <div class="card">
                        <div class="card-header">
                            <h5 class="mb-0 h6">Accessory Information</h5>
                        </div>
                        <div class="card-body">
                            <div class="form-group row">
                                <div class="col-md-6">
                                    <label>Accessory Name</label>
                                    <input type="text"
                                        name="title"
                                        className="form-control"
                                        placeholder="Accessory Name"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)} />
                                </div>
                                <div class="col-md-6">
                                    <label>Brand</label>
                                    <select
                                        name="subs"
                                        className="form-control"
                                        placeholder="Please select"
                                        value={brand}
                                        onChange={(e) => setBrand(e.target.value)}
                                    >
                                        <option>Please select Brand</option>
                                        <option value="apple">Apple</option>
                                        <option value="samsung">Samsung</option>
                                        <option value="opp">Oppo</option>
                                        <option value="infinix">Infinix</option>
                                        <option value="aramo">Aramo</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-12">
                                    <label>Specifications</label>
                                    <textarea
                                        rows="3"
                                        name="tv"
                                        className="form-control"
                                        value={specs}
                                        onChange={(e) => setSpecs(e.target.value)} />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h5 class="mb-0 h6">Product Images</h5>
                        </div>
                        <div class="card-body">
                            <div class="form-group row">
                                <label class="d-none col-md-3 col-form-label" for="signinSrEmail">Product Images <small>(600x600)</small></label>
                                <div class="col-md-8">
                                    <label className="btn btn-primary btn-raised mt-3" style={{ cursor: 'pointer' }}>
                                        Upload Product Images
                                        <input type="file" multiple onChange={fileUploadAndResize} hidden />
                                    </label>

                                    <div class="img-container">
                                        {imgloading && <Spinner />}
                                        {images && images.map((image, i) => (
                                            <>
                                                <LazyLoadImage key={i} src={image.url} alt="uplaodimage" class="img-admin" />
                                                <div class="remove"><button class="btn btn-sm btn-link remove-attachment" type="button" onClick={() => handleImageRemove(image.public_id)}><i class="la la-close"></i></button></div>
                                            </>
                                        ))}

                                    </div>
                                    <small class="text-muted">These images are visible in product details page gallery. Use 600x600 sizes images.</small>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h5 class="mb-0 h6">Product Price + Discount</h5>
                        </div>
                        <div class="card-body">
                            <div class="form-group row">
                                <label class="col-md-3 col-from-label">Product Price</label>
                                <div class="col-md-6">
                                    <input type="number"
                                        name="price"
                                        className="form-control"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 col-from-label">Discount Price</label>
                                <div class="col-md-6">
                                    <input type="text"
                                        name="discountprice"
                                        className="form-control"
                                        value={discountprice}
                                        onChange={(e) => setDiscountPrice(e.target.value)} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 col-from-label">Color</label>
                                <div class="col-md-6">
                                <select name="condition"
                                    className="form-control"
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}>
                                    <option selected>Select Color Type</option>
                                    <option value="Black">Black</option>
                                    <option value="Red">Red</option>
                                    <option value="Blue">Blue</option>
                                    <option value="Green">Green</option>
                                    <option value="White">White</option>
                                </select>
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>

                    <div class="mb-3 text-right">
                        <button type="submit" name="button" class="btn btn-primary">
                            {loading ? <Spinner /> : 'Edit Accessory'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditAccessory