'use client'

import React from 'react'
import CartTotals from './totals'
import HeaderSm from '../Components/header/Responsive/headerSm'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/features/cart/cartSlice'

const ShoppingPage = () => {
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  return (
    <div className="max-w-[1200px] mx-auto px-[15px] mt-[50px]">
      <div className="md:hidden">
        <HeaderSm />
      </div>
      <h1 className="text-2xl font-semibold mb-6">Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="border p-4 rounded-md flex justify-between items-center">
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p>${item.price}</p>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-600 font-bold"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
        <CartTotals products={cartItems} />
      </div>
    </div>
  )
}

export default ShoppingPage
