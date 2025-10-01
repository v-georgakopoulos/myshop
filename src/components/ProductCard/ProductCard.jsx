import { useContext } from "react";

import Button from "../Button/Button"

import { CartContext } from "../../contexts/cartContext";

import "./ProductCard.scss"

const ProductCard = ({product}) => {
  const {imageUrl,name,price} = product;
  const {addItemToCart} = useContext(CartContext)

  const addProductToCart = () => addItemToCart(product)

  return (
    <div className="product-card-container">
        <img src={imageUrl} alt={`${name}`} />
        <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <Button onClick={addProductToCart} buttonType='inverted'>add to cart</Button>
    </div>
  )
}

export default ProductCard