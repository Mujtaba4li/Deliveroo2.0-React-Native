import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice';


const BasketIcon = () => {
    const items=useSelector(selectBasketItems)
    const totalBasket=useSelector(selectBasketTotal)
  return (
    <TouchableOpacity className='absolute bottom-10 z-50 bg-[#00ccbb] w-full rounded-lg h-16 flex-row justify-center items-center'>
      <Text className='text-red-900'>{items.length}</Text>
      <Text>Order Now</Text>
      <Text>{totalBasket}</Text>
    </TouchableOpacity>
  )
}

export default BasketIcon