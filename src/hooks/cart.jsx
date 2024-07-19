import { useContext } from 'react'
import { CartContext } from '../contexts/cartContext'

export function useCart() {
  return useContext(CartContext)
}