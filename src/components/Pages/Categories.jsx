import { useEffect, useState } from "react";
import categoryData from "../../api/categories.json";
import Category from "../ui/Category";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoryData);
  }, []);

  return (
    <div className="min-h-[308px] py-4">
      <div className="container mx-auto">
        <h3 className="mb-3 ml-3 text-sm font-semibold text-textcolor md:ml-0">Kategoriler</h3>
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
          {categories && categories.map((category, index) => <Category key={index} category={category} />)}
        </div>
      </div>
    </div>
  );
}
