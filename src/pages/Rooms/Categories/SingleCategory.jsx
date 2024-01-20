import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import queryString from "query-string";
export default function SingleCategory({ property, selectedItem }) {
  //   console.log(property);,
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const handleParams = () => {
    // console.log("clicked");
    let currentQuery = {};
    if (params) {
      currentQuery = queryString.parse(params.toString());
      //   console.log(currentQuery);
    }
    const newQuery = { ...currentQuery, category: property.label };
    const url = queryString.stringifyUrl({
      url: "/",
      query: newQuery,
    });
    navigate(url);
  };
  return (
    <div
      onClick={handleParams}
      className={`flex flex-col items-center justify-center p-3 gap-6 hover:text-slate-200 transition duration-500 cursor-pointer ${
        selectedItem && "border-b-4 border-slate-50"
      }`}
    >
      {<property.icon size={30} />}
      <h1>{property.label}</h1>
    </div>
  );
}
