import axios from "axios";

export const getOrders = async () =>
  await axios.get(`${process.env.REACT_APP_API}/orders`);

  // export const getOrders = async (token) =>
  // await axios.get(`${process.env.REACT_APP_API}/orders`, {
  //   headers: {
  //     'Authorization': `Bearer ${token}` 
  // }
  // });

export const getOrderDetails = async (id, token) =>
  await axios.get(`${process.env.REACT_APP_API}/orders/${id}`);

  // export const getOrderDetails = async (id, token) =>
  // await axios.get(`${process.env.REACT_APP_API}/orders/${id}`, {
  //   headers: {
  //     'Authorization': `Bearer ${token}` 
  // }
  // });