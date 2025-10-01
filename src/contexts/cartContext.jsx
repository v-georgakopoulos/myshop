import { createContext, useState, useEffect} from "react";

//step 1 after setIsCartOpen we start creating the cart

const addCartItem = (cartItems,productToAdd) => {

    const existingCartitem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    if(existingCartitem){
        return cartItems.map((cartItem)=>
        cartItem.id === productToAdd.id
        ? {...cartItem, quantity:cartItem.quantity +1}
        : cartItem
        )
    }

    return [...cartItems,{...productToAdd,quantity: 1}]
}

//step 3 create the removeCartItem

const removeCartItem = (cartItems,cartItemToRemove) => {

    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)

    if(existingCartItem.quantity === 1){
        return cartItems.filter((cartItem)=> cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id
            ? {...cartItem,quantity:cartItem.quantity - 1}
            : cartItem
)
}

//step 4 create the clearItemFromCart

const clearCartItem = (cartItems,cartItemToClear) => {
    return cartItems.filter((cartItem)=> cartItem.id !== cartItemToClear.id)
}



export const CartContext = createContext({
isCartOpen:false,
setIsCartOpen: () => {},
cartItems: [],
addItemToCart: () => {},
removeItemFromCart:() => {},
clearItemFromCart: () => {},
cartCount: 0,
cartTotal:0


})

export const CartProvider = ({children}) => {

    const [isCartOpen,setIsCartOpen] = useState(false)
    const [cartItems,setCartItems] = useState([])
    const [cartCount,setCartCount] = useState(0)
    const [cartTotal,setCartTotal] = useState(0)

    //step 2  create cartCount and useEffect to change cartCount
    useEffect(()=>{
        const newCartCount = cartItems.reduce((total,cartItem)=>
        total + cartItem.quantity,0
        )
        setCartCount(newCartCount)
    },[cartItems])

    //step 5 create cartTotal
    useEffect(()=>{
        const newCarTotal = cartItems.reduce((total,cartItem) => total + cartItem.quantity * cartItem.price,0)
        setCartTotal(newCarTotal)
    },[cartItems])


    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd))
    }
    const removeItemFromCart = (cartItemToRemove) =>{
        setCartItems(removeCartItem(cartItems,cartItemToRemove))
    }
    const clearItemFromCart = (cartItemToClear) =>{
        setCartItems(clearCartItem(cartItems,cartItemToClear))
    }


    const value= {isCartOpen,setIsCartOpen,addItemToCart,cartItems,cartCount,removeItemFromCart,clearItemFromCart,cartTotal}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>

}