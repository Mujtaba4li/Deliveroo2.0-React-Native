import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryCard = ({imgURL,Title}) => {
  return (
    <TouchableOpacity className='relative m-1'>
        <Image
        source={{
            uri:imgURL
        }}
        className="h-20 w-20 rounded opacity-80"
        />
      <Text className='absolute bottom-1 text-white font-bold left-4'>{Title}</Text>

    </TouchableOpacity>
  )
}

export default CategoryCard