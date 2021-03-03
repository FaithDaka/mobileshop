import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import Resizer from "react-image-file-resizer";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { getSubs } from "../../../functions/sub";
import Spinner from '../../../components/Spinner'
import { getProduct, updateProduct } from "../../../functions/products";
import { getCategories } from "../../../functions/category";

const EditProducts = ({ history, match }) => {

    const auth = useSelector(state => state.auth);

    const [storagePrice, setStoragePrice] = useState(false);
    const [loading, setLoading] = useState(false);
    const [imgloading, setImgLoading] = useState(false);

    const [title, setTitle] = useState('');
    const [discount, setDiscount] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);
    const [subs, setSubs] = useState([]);
    const [color, setColor] = useState('');
    const [storageChecked, setStorageChecked] = useState(false)
    const [memory, setMemory] = useState('');
    const [condition, setCondition] = useState([]);
    const [performance, setPerformance] = useState('');
    const [display, setDisplay] = useState('');
    const [battery, setBattery] = useState('');
    const [camera, setCamera] = useState('');
    const [tv, setTV] = useState('');
    const [sixteen, setSixteen] = useState('');
    const [thirtytwo, setThirtyTwo] = useState('');
    const [sixtyfour, setSixtyFour] = useState('');
    const [onetwentyeight, setOneTwentyEight] = useState('');
    const [twofiftysix, setTwoFiftySix] = useState('');
    const [fivetwelve, setFiveTwelve] = useState('');

    const [subOptions, setSubOptions] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('');

    const { id } = match.params;

    const loadProduct = () => {
        setLoading(true);
        getProduct(id).then((p) => {
            setLoading(false);
            setTitle(p.data.title)
            setPrice(p.data.price)
            setStoragePrice(p.data.storagePrice);
            setDiscount(p.data.discount);
            setQuantity(p.data.quantity);
            setDescription(p.data.description);
            setImages(p.data.images);
            setCategory(p.data.category._id);
            setSubs(p.data.subs._id);
            setColor(p.data.colors);
            setStorageChecked(p.data.storageChecked)
            setMemory(p.data.memory);
            setCondition(p.data.condition);
            setPerformance(p.data.performance);
            setDisplay(p.data.display);
            setBattery(p.data.battery);
            setCamera(p.data.camera);
            setTV(p.data.tv);
            setSixteen(p.data.storageprice && p.data.storageprice.sixteen);
            setThirtyTwo(p.data.storageprice && p.data.storageprice.thirtytwo);
            setSixtyFour(p.data.storageprice && p.data.storageprice.sixtyfour);
            setOneTwentyEight(p.data.storageprice && p.data.storageprice.setOneTwentyEight);
            setTwoFiftySix(p.data.storageprice && p.data.storageprice.setTwoFiftySix);
            setFiveTwelve(p.data.storageprice && p.data.storageprice.fivetwelve);

        });
    };

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
        loadProduct();
        loadSubs();
    }, []);

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
                                console.log("CLOUDINARY UPLOAD ERR", err);
                                toast.error("error upload Failure");
                            });
                    },
                    "base64"
                );
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const data = {
            title: title,
            description: description,
            price: price,
            discount: discount,
            quantity: quantity,
            color: color,
            memory: memory,
            storageChecked: storageChecked,
            images: images,
            category: category,
            subs: subs,
            condition: condition,
            performance: performance,
            display: display,
            battery: battery,
            camera: camera,
            tv: tv,
            sixteen: sixteen,
            thirtytwo: thirtytwo,
            sixtyfour: sixtyfour,
            onetwentyeight: onetwentyeight,
            twofiftysix: twofiftysix,
            fivetwelve: fivetwelve
        }

            updateProduct(id, data)
            .then((res) => {
                setLoading(false);
                toast.success(`"${res.data.title}" Updated Succesfully`);
                history.push("/admin/listproduct");
            })
            .catch((err) => {
                setLoading(false);
                toast.error("Error while updating product");
            });
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

    return (
        <>
        {loading && <Spinner />}
            <div class="aiz-titlebar text-left mt-2 mb-3">
                <h5 class="mb-0 h6">Edit Product</h5>
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
                                    <label>Product Type</label>
                                    <select name="condition"
                                        className="form-control"
                                        value={condition}
                                        onChange={(e) => setCondition(e.target.value)}>
                                        <option selected>Select Condition</option>
                                        <option selected>Select Product Type</option>
                                        <option value="Brand New">Brand New</option>
                                        <option value="Uk Used">Uk Used</option>
                                        <option value="Accessories">Accessories</option>
                                        <option value="Televisions">Televisions</option>
                                        <option value="Systems">Sound Systems</option>
                                        <option value="Tablets">Tablets & Ipads</option>
                                        <option value="Gaming">Gaming</option>
                                        <option value="Fridges">Fridges</option>
                                        <option value="Laptops">Laptops</option>
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
                                <div class="col-md-12">
                                <label>TV Specs</label>
                                    <textarea
                                        rows="3"
                                        name="tv"
                                        className="form-control"
                                        value={tv}
                                        onChange={(e) => setTV(e.target.value)} />
                                </div>
                                {/* <div class="col-md-6">
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
                                </div> */}
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
                            <label class="aiz-checkbox">
                                <input type="checkbox" checked={storageChecked} onChange={(e) => setStorageChecked(e.target.checked)} />
                                <span class="opacity-60">Select if you want to add storage prices</span>
                                <span class="aiz-square-check"></span>
                            </label>
                            {storageChecked}
                        </div>
                        <div class="card-body">
                        <div className="form-group row">
                            <div className="col-sm-6">
                                    <label>16 GB Price</label>
                                    <input type="number"
                                        name="sixteen"
                                        className="form-control"
                                        value={sixteen}
                                        onChange={(e) => setSixteen(e.target.value)} />
                                </div>

                                <div className="col-sm-6">
                                    <label>32 GB Price</label>
                                    <input type="number"
                                        name="thirtytwo"
                                        className="form-control"
                                        value={thirtytwo}
                                        onChange={(e) => setThirtyTwo(e.target.value)} />
                                </div>
                            </div>

                            <div className="form-group row">
                            <div className="col-sm-6">
                                    <label>64 GB Price</label>
                                    <input type="number"
                                        name="sixtyfour"
                                        className="form-control"
                                        value={sixtyfour}
                                        onChange={(e) => setSixtyFour(e.target.value)} />
                                </div>

                                <div className="col-sm-6">
                                    <label>128 GB Price</label>
                                    <input type="number"
                                        name="onetwentyeight"
                                        className="form-control"
                                        value={onetwentyeight}
                                        onChange={(e) => setOneTwentyEight(e.target.value)} />
                                </div>
                            </div>

                            <div className="form-group row">
                            <div className="col-sm-6">
                                    <label>256 GB Price</label>
                                    <input type="number"
                                        name="twofiftysix"
                                        className="form-control"
                                        value={twofiftysix}
                                        onChange={(e) => setTwoFiftySix(e.target.value)} />
                                </div>

                                <div className="col-sm-6">
                                    <label>512 GB Price</label>
                                    <input type="number"
                                        name="fivetwelve"
                                        className="form-control"
                                        value={fivetwelve}
                                        onChange={(e) => setFiveTwelve(e.target.value)} />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="mb-3 text-right">
                        <button type="submit" name="button" class="btn btn-primary">
                        {loading ? <Spinner /> : 'Update Product'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditProducts
