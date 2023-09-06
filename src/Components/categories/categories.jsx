import Category from "./category";
import { categoriesData } from "../../Services/categoriesData.js";
const Categories = () => {
  return (

    <div className="flex justify-center items-center">
      {categoriesData.map((item) => (
        <Category data={item} />
      ))}
    </div>

  );
};

export default Categories;
