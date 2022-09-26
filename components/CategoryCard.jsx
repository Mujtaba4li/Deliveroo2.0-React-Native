import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { urlFor } from '../lib/client'

const CategoryCard = ({imgURL,Title}) => {
  return (
    <TouchableOpacity className='relative m-1'>
        <Image
        source={{
            uri:imgURL
        }}
        className="h-20 w-20 rounded opacity-9"
        />
      <Text className='absolute bottom-0 text-emerald-700 bg-white pl-1 pr-1 font-extrabold '>{Title}</Text>

    </TouchableOpacity>
  )
}

export default CategoryCard