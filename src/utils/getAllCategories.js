import axios from "axios";

export const getAllCategories = async () => {
  const res = await axios.get("http://localhost:5000/category");
  return res?.data;
};
