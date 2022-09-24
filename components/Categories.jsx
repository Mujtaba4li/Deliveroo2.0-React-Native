import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
    horizontal
    className='m-2'
    >
        <CategoryCard/>
        <CategoryCard/>
        <CategoryCard/>

    </ScrollView>
  )
}

export default Categories