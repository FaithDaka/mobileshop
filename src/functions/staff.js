import axios from "axios";

export const registerAdmin = async (data) =>
  await axios.post(`${process.env.REACT_APP_API}/staff/register`, data);

export const loginAdmin = async (data) =>
  await axios.post(`${process.env.REACT_APP_API}/staff/login`, data);