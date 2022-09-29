import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const ResturantScreen = () => {
    // route.params.title  
  const {params:{
    id,
    imgURL,
    title,
    rating,
    gendre,
    short_description,
    address,
    dishes,
    long,
    lat,
  }}=useRoute();
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

export default ResturantScreen