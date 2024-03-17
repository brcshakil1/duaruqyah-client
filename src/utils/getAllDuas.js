import axios from "axios";

export const getAllDuas = async (cat_id) => {
  const res = await axios(`http://localhost:5000/dua`);
  const duas = res?.data?.filter((dua) => dua?.cat_id === cat_id);
  return duas;
};
