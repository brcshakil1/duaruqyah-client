import Search from "@/components/shared/Search/Search";

const Categories = () => {
  return (
    <div className="bg-white rounded-t-lg overflow-hidden ">
      <h2 className="bg-primary p-4 text-white font-semibold">Categories</h2>
      <div className="p-4">
        <Search searchName="Categories" reverse="reverse" />
      </div>
    </div>
  );
};

export default Categories;
