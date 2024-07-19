import { useState, useEffect } from 'react'
import { CartContext } from '../contexts/cartContext'
import { notifyCartChange } from '../utils/cartUtils'

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('@foodexplorer:cart')
    return storedCart ? JSON.parse(storedCart) : { id: null, items: [] }
  })

  function addToCart({ dishId, quantity }) {
    setCart(prevCart => {
      const { id, items } = prevCart
      const itemIndex = items.findIndex(item => item.dishId === dishId)

      if (quantity === 0) {
        return { id, items: items.filter(item => item.dishId !== dishId) }
      }

      if (itemIndex === -1) {
        return { id, items: [...items, { dishId, quantity }] }
      }

      const newItems = [...items]
      newItems[itemIndex] = { 
        ...newItems[itemIndex],
        quantity: newItems[itemIndex].quantity + quantity
      }
      return { id, items: newItems }
    })
  }

  function removeFromCart(dishId) {
    setCart(prevCart => {
      const { id, items } = prevCart
      return { id, items: items.filter(item => item.dishId !== dishId) }
    })
  }

  function clearCart() {
    setCart({ id: null, items: [] })
    localStorage.removeItem('@foodexplorer:cart')
  }

  useEffect(() => {
    localStorage.setItem('@foodexplorer:cart', JSON.stringify(cart))
    notifyCartChange()
  }, [cart])

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}