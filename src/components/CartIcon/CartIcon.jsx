import { useContext } from "react"
import {ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"

import { CartContext } from "../../contexts/cartContext"

import "./CartIcon.scss"

const CartIcon = () => {
const {isCartOpen,setIsCartOpen} = useContext(CartContext)

const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen)
}

    return(
        <div className="cart-icon-container">
            <ShoppingIcon  onClick={toggleIsCartOpen} className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}

export default CartIcon