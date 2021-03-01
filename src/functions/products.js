import axios from "axios";

export const createProduct = async (product, token) =>
  await axios.post(`${process.env.REACT_APP_API}/product`, product, {
    headers: {
      'Authorization': `Bearer ${token}` 
  }
  });

export const getProducts = async (pageNumber) =>
  await axios.get(`${process.env.REACT_APP_API}/product?page=${pageNumber}`);

export const searchProducts = async () =>
  await axios.get(`${process.env.REACT_APP_API}/product/search`);

export const getBrandNew = async (pageNumber) =>
  await axios.get(`${process.env.REACT_APP_API}/product/brandnew?page=${pageNumber}`);

export const getUkUsed = async (pageNumber) =>
  await axios.get(`${process.env.REACT_APP_API}/product/ukused?page=${pageNumber}`);

export const getAccessories = async (pageNumber) =>
  await axios.get(`${process.env.REACT_APP_API}/product/accessories?page=${pageNumber}`);

export const getTelevisions = async (pageNumber) =>
  await axios.get(`${process.env.REACT_APP_API}/product/tvs?page=${pageNumber}`);

export const getFridges = async (pageNumber) =>
  await axios.get(`${process.env.REACT_APP_API}/product/fridges?page=${pageNumber}`);

export const getGaming = async (pageNumber) =>
  await axios.get(`${process.env.REACT_APP_API}/product/gaming?page=${pageNumber}`);

export const getSound = async (pageNumber) =>
  await axios.get(`${process.env.REACT_APP_API}/product/sound?page=${pageNumber}`);

export const getTablets = async (pageNumber) =>
  await axios.get(`${process.env.REACT_APP_API}/product/tablets?page=${pageNumber}`);

export const getLaptops = async (pageNumber) =>
  await axios.get(`${process.env.REACT_APP_API}/product/laptops?page=${pageNumber}`);

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