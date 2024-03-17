import axios from "axios";

export const getAllSubCategory = async (id) => {
  const res = await axios(`http://localhost:5000/sub_category`);
  const sub_category = res?.data?.filter(
    (sub_category) => sub_category?.cat_id === id
  );
  return sub_category;
};
