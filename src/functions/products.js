import axios from "axios";

export const createProduct = async (product, token) =>
  await axios.post(`${process.env.REACT_APP_API}/product`, product, {
    headers: {
      'Authorization': `Bearer ${token}` 
  }
  });

export const getProductsByCount = async (count) =>
  await axios.get(`${process.env.REACT_APP_API}/product/${count}`);

export const removeProduct = async (slug) =>
  await axios.delete(`${process.env.REACT_APP_API}/product/${slug}`);

export const getProduct = async (id) =>
  await axios.get(`${process.env.REACT_APP_API}/product/prod/${id}`);

  export const getProductBrands = async (slug) =>
  await axios.get(`${process.env.REACT_APP_API}/product/${slug}`);

export const updateProduct = async (id, product) =>
  await axios.put(`${process.env.REACT_APP_API}/product/${id}`, product);

export const getProducts = async () =>
  await axios.get(`${process.env.REACT_APP_API}/product`);

export const getProductsCount = async () =>
  await axios.get(`${process.env.REACT_APP_API}/product/total`);

export const productStar = async (productId, star, authtoken) =>
  await axios.put(
    `${process.env.REACT_APP_API}/product/star/${productId}`,
    { star },
    {
      headers: {
        authtoken,
      },
    }
  );

export const getRelated = async (productId) =>
  await axios.get(`${process.env.REACT_APP_API}/product/related/${productId}`);

export const fetchProductsByFilter = async (arg) =>
  await axios.post(`${process.env.REACT_APP_API}/product/search/filters`, arg);