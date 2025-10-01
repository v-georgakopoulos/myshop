import { useContext } from "react"

import Button from "../Button/Button"
import CartItem from "../CartItem/CartItem"

import { CartContext } from "../../contexts/cartContext"

import "./CartDropdown.scss"
import { useNavigate } from "react-router-dom"

const CartDropdown = () => {

  const {cartItems} = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <div className="cart-dropdown-container">
        <div className="cart-items">
             {cartItems.map((item)=><CartItem key={item.id} cartItem={item}/>)}
        </div>
        <Button onClick={goToCheckoutHandler}>go to checkout</Button>
    </div>
  )
}

export default CartDropdown 