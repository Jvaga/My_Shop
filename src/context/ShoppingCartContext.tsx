import React, { ReactNode, createContext, useContext, useState } from "react";
import { ShoppingCart } from "../components/shoppingCart/ShoppingCart";


type ShoppingCartProvider ={
    children : ReactNode
}

type CartItem = {
    id:number
    quantity: number
}

type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id:number) => number
    increaseCartQuantity: (id:number) => void
    decreaseCartQuantity: (id:number) => void
    removeFromCart: (id:number) => void
    cartQuantity: number
    cartItems: CartItem[]


}

const ShoppingcartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart(){
    return useContext(ShoppingcartContext)
}


export function ShoppingCartProvider ({children} : ShoppingCartProvider) {

    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState<CartItem[]>([])


    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)


    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id:number){
        return setCartItems(currentItems => {
            if (currentItems.find(item => item.id === id) == null) {
                return [...currentItems, {id, quantity: 1}]
            }else{
                return currentItems.map(item =>{
                    if (item.id === id) {
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id:number){
        return setCartItems(currentItems => {
            if (currentItems.find(item => item.id === id)?.quantity === 1) {
                return  currentItems.filter(item => item.id !== id)
            }else{
                return currentItems.map(item =>{
                    if (item.id === id) {
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id: number) {
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id !== id)
        })
    }

    return (
        <ShoppingcartContext.Provider value={{getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart,  openCart, closeCart, cartItems, cartQuantity}}>
            {children}
             <ShoppingCart isOpen={isOpen} />
        </ShoppingcartContext.Provider>
    )
}