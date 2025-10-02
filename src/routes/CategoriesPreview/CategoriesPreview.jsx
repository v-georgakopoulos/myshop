import {Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/categoriesContext";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {
        Object.keys(categoriesMap).map((title)=>{
          const products = categoriesMap[title]
          return (
            <CategoryPreview key={title} title={title} products={products}/>
          )
        })
      }
    </Fragment>
  );
};

export default CategoriesPreview;
