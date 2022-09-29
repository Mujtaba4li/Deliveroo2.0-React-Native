import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice';


const BasketIcon = () => {
    const items=useSelector(selectBasketItems)
    const totalBasket=useSelector(selectBasketTotal)
  return (
    <TouchableOpacity className='absolute bottom-10 z-50 bg-[#00ccbb] w-full rounded-lg h-16 flex-row space-x-5 items-center m-2'>
      <Text className='font-bold text-xl ml-5 text-white'>{items.length}</Text>
      <Text className='text-white font-extrabold text-2xl'>Order Now</Text>
      <Text className='text-white font-bold text-xl'>Pkr{totalBasket}</Text>
    </TouchableOpacity>
  )
}

export default BasketIcon