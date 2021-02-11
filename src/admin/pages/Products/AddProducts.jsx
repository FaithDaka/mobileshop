import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import Resizer from "react-image-file-resizer";
import { storage } from '../../../firebase';
import { getSubs } from "../../../functions/sub";
import Spinner from '../../../components/Spinner'
import { createProduct } from "../../../functions/products";
import { getCategories } from "../../../functions/category";

const AddProducts = ({ history }) => {

    const auth = useSelector(state => state.auth);

    const [storagePrice, setStoragePrice] = useState(false);
    const [loading, setLoading] = useState(false);

    const [title, setTitle] = useState('');
    const [discount, setDiscount] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);
    const [subs, setSubs] = useState([]);
    const [color, setColor] = useState('');
    const [Storage, setStorage] = useState('');
    const [memory, setMemory] = useState('');
    const [condition, setCondition] = useState([]);
    const [performance, setPerformance] = useState('');
    const [display, setDisplay] = useState('');
    const [battery, setBattery] = useState('');
    const [camera, setCamera] = useState('');
    const [eight, setEight] = useState('');
    const [sixteen, setSixteen] = useState('');
    const [thirtytwo, setThirtyTwo] = useState('');
    const [sixtyfour, setSixtyFour] = useState('');
    const [onetwentyeight, setOneTwentyEight] = useState('');
    const [twofiftysix, setTwoFiftySix] = useState('');
    const [fivetwelve, setFiveTwelve] = useState('');
    const [onetb, setOneTb] = useState('');

    const [subOptions, setSubOptions] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('');

    const toggle = () => setStoragePrice(!storagePrice);

    const loadCategories = () => {
        setLoading(true);
        getCategories().then((c) => {
            setCategories(c.data)
            setLoading(false);
        });
    }

    const loadSubs = () => {
        setLoading(true);
        getSubs().then((c) => {
            setSubOptions(c.data)
            setLoading(false);
        });
    }

    useEffect(() => {
        loadCategories();
        loadSubs();
    }, []);

    const fileUploadAndResize = (e) => {
        let files = e.target.files; // 3
        let allUploadedFiles = images;

        if (files) {
            setLoading(true);
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
                                setLoading(false);
                                allUploadedFiles.push(res.data);

                                // setValues({ ...values, images: allUploadedFiles });
                                setImages(allUploadedFiles)
                            })
                            .catch((err) => {
                                setLoading(false);
                                console.log("CLOUDINARY UPLOAD ERR", err);
                            });
                    },
                    "base64"
                );
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            title: title,
            description: description,
            price: price,
            discount: discount,
            quantity: quantity,
            color: color,
            memory: memory,
            storage: Storage,
            images: images,
            category: category,
            subs: subs,
            condition: condition,
            performance: performance,
            display: display,
            battery: battery,
            camera: camera,
            eight: eight,
            sixteen: sixteen,
            thirtytwo: thirtytwo,
            sixtyfour: sixtyfour,
            onetwentyeight: onetwentyeight,
            twofiftysix: twofiftysix,
            fivetwelve: fivetwelve,
            onetb: onetb
             }

        createProduct(data, auth.token)
            .then((res) => {
                console.log(res);
                history.push('/admin/listproduct')
                toast.success(res.data.message);
            })
            .catch((err) => {
                console.log(err);
                toast.error(err.response.data);
            });
    };

    return (
        <>
            <div class="aiz-titlebar text-left mt-2 mb-3">
                <h5 class="mb-0 h6">Add New Product</h5>
            </div>
            <div class="col-md-10 mx-auto">
                <form class="form form-horizontal mar-top" onSubmit={handleSubmit}>
                    <div class="card">
                        <div class="card-header">
                            <h5 class="mb-0 h6">Product Information</h5>
                        </div>
                        <div class="card-body">
                            <div class="form-group row">
                                <div class="col-md-6">
                                    <label>Product Name</label>
                                    <input type="text"
                                        name="title"
                                        className="form-control"
                                        placeholder="Product Name"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)} />
                                </div>
                                <div className="col-md-6">
                                    <label>Condition</label>
                                    <select name="condition"
                                        className="form-control"
                                        value={condition}
                                        onChange={(e) => setCondition(e.target.value)}>
                                        <option selected>Select Condition</option>
                                        <option value="Brand New">Brand New</option>
                                        <option value="Uk Used">Uk Used</option>
                                        <option value="Accessories">Accessories</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-6">
                                    <label>Category</label>
                                    <select
                                        name="category"
                                        value={category}
                                        className="form-control"
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <option>Please select Category</option>
                                        {categories.length > 0 && categories.map((c) => (
                                            <option key={c._id} value={c._id}>
                                                {c.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label>Brand</label>
                                    <select
                                        name="subs"
                                        className="form-control"
                                        placeholder="Please select"
                                        value={subs}
                                        onChange={(e) => setSubs(e.target.value)}
                                    >
                                        <option>Please select Brand</option>
                                        {subOptions.length &&
                                            subOptions.map((s) => (
                                                <option key={s._id} value={s._id}>
                                                    {s.name}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-12">
                                    <label>Product Description</label>
                                    <textarea
                                        rows="3"
                                        name="description"
                                        className="form-control"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)} />
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-6">
                                    <label>Display</label>
                                    <textarea
                                        rows="3"
                                        name="display"
                                        className="form-control"
                                        value={display}
                                        onChange={(e) => setDisplay(e.target.value)} />
                                </div>
                                <div class="col-md-6">
                                    <label>Performance</label>
                                    <textarea
                                        rows="3"
                                        name="performance"
                                        className="form-control"
                                        value={performance}
                                        onChange={(e) => setPerformance(e.target.value)} />
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-6">
                                    <label>Camera</label>
                                    <textarea
                                        rows="3"
                                        name="camera"
                                        className="form-control"
                                        value={camera}
                                        onChange={(e) => setCamera(e.target.value)} />
                                </div>
                                <div class="col-md-6">
                                    <label>Battery</label>
                                    <textarea
                                        rows="3"
                                        name="battery"
                                        className="form-control"
                                        value={battery}
                                        onChange={(e) => setBattery(e.target.value)} />
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-4">
                                    <label>Storage</label>
                                    <select name="storage"
                                        className="form-control"
                                        value={storage}
                                        onChange={(e) => setStorage(e.target.value)}>
                                        <option selected>Select Storage</option>
                                        <option value="8GB">8GB</option>
                                        <option value="16GB">16GB</option>
                                        <option value="32GB">32GB</option>
                                        <option value="64GB">64GB</option>
                                        <option value="128GB">128GB</option>
                                        <option value="256GB">256GB</option>
                                        <option value="512GB">512GB</option>
                                        <option value="1TB">1TB</option>

                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <label>Color</label>
                                    <select name="color"
                                        className="form-control"
                                        value={color}
                                        onChange={(e) => setColor(e.target.value)}>
                                        <option selected>Select Color</option>
                                        <option value="Black">Black</option>
                                        <option value="Silver">Silver</option>
                                        <option value="Navy">Navy</option>
                                        <option value="Red">Red</option>

                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <label>Memory</label>
                                    <select name="memory"
                                        className="form-control"
                                        value={memory}
                                        onChange={(e) => setMemory(e.target.value)}>
                                        <option selected>Select Memory</option>
                                        <option value="1GB">1GB</option>
                                        <option value="2GB">2GB</option>
                                        <option value="3GB">3GB</option>
                                        <option value="4GB">4GB</option>
                                        <option value="6GB">6GB</option>
                                        <option value="8GB">8GB</option>
                                        <option value="10GB">10GB</option>
                                        <option value="12GB">12GB</option>
                                    </select>
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

                                    <div class="">
                                        {loading && <Spinner /> }
                                        {images && images.map((image, i) => (
                                            <>
                                                <img key={i} src={image.url} alt="uplaodimage" />
                                                <div class="remove"><button class="btn btn-sm btn-link remove-attachment" type="button"><i class="la la-close"></i></button></div>
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
                                <label class="col-md-3 col-from-label">Discount Percentage %</label>
                                <div class="col-md-6">
                                    <input type="number"
                                        name="discount"
                                        className="form-control"
                                        value={discount}
                                        onChange={(e) => setDiscount(e.target.value)} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="col-md-3 col-from-label">Quantity</label>
                                <div class="col-md-6">
                                    <input type="number"
                                        name="quantity"
                                        className="form-control"
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)} />
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <h5 class="mb-0 h6">Product Storage Prices</h5>
                        </div>
                        <div class="card-body">
                            <div className="form-group row">
                                <div className="col-sm-6">
                                    <label>8 GB Price</label>
                                    <input type="number"
                                        name="eight"
                                        className="form-control"
                                        value={eight}
                                        onChange={(e) => setEight(e.target.value)} />
                                </div>

                                <div className="col-sm-6">
                                    <label>16 GB Price</label>
                                    <input type="number"
                                        name="sixteen"
                                        className="form-control"
                                        value={sixteen}
                                        onChange={(e) => setSixteen(e.target.value)} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-sm-6">
                                    <label>32 GB Price</label>
                                    <input type="number"
                                        name="thirtytwo"
                                        className="form-control"
                                        value={thirtytwo}
                                        onChange={(e) => setThirtyTwo(e.target.value)} />
                                </div>

                                <div className="col-sm-6">
                                    <label>64 GB Price</label>
                                    <input type="number"
                                        name="sixtyfour"
                                        className="form-control"
                                        value={sixtyfour}
                                        onChange={(e) => setSixtyFour(e.target.value)} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-sm-6">
                                    <label>128 GB Price</label>
                                    <input type="number"
                                        name="onetwentyeight"
                                        className="form-control"
                                        value={onetwentyeight}
                                        onChange={(e) => setOneTwentyEight(e.target.value)} />
                                </div>

                                <div className="col-sm-6">
                                    <label>256 GB Price</label>
                                    <input type="number"
                                        name="twofiftysix"
                                        className="form-control"
                                        value={twofiftysix}
                                        onChange={(e) => setTwoFiftySix(e.target.value)} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-sm-6">
                                    <label>512 GB Price</label>
                                    <input type="number"
                                        name="fivetwelve"
                                        className="form-control"
                                        value={fivetwelve}
                                        onChange={(e) => setFiveTwelve(e.target.value)} />
                                </div>

                                <div className="col-sm-6">
                                    <label>1 TB Price</label>
                                    <input type="number"
                                        name="onetb"
                                        className="form-control"
                                        value={onetb}
                                        onChange={(e) => setOneTb(e.target.value)} />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="mb-3 text-right">
                        <button type="submit" name="button" class="btn btn-primary">Save Product</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddProducts
