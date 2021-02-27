import axios from "axios";

export const getSubs = async () =>
  await axios.get(`${process.env.REACT_APP_API}/subs`);

export const getSub = async (slug) =>
  await axios.get(`${process.env.REACT_APP_API}/subs/${slug}`);

export const removeSub = async (slug) =>
  await axios.delete(`${process.env.REACT_APP_API}/subs/${slug}`);

export const updateSub = async (slug, sub) =>
  await axios.put(`${process.env.REACT_APP_API}/subs/${slug}`, sub);

export const createSub = async (sub, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/subs`, sub);