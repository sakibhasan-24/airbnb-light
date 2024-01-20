import React from "react";
import { categories } from "./CategoriesData";
import SingleCategory from "./SingleCategory";
import { useSearchParams } from "react-router-dom";

export default function Categories() {
  const [params, setParams] = useSearchParams();
  const categoryItem = params.get("category");

  return (
    <div>
      <div className="flex items-center pt-4  overflow-x-auto">
        {categories.map((category) => (
          <SingleCategory
            key={category.label}
            property={category}
            selectedItem={categoryItem === category.label}
          />
        ))}
      </div>
    </div>
  );
}
