import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categoriesContext";
import ProductCard from "../../components/ProductCard/ProductCard";

import "./Shop.scss"

const Shop = () => {
  const { products } = useContext(CategoriesContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
