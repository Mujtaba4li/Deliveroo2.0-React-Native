import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
    horizontal
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:6
        
    }}
    >
        <CategoryCard imgURL='https://mujtaba-ali.vercel.app/static/media/header-img.1c0118c3bc802a747396.png' Title='Title 1'/>
        <CategoryCard imgURL='https://mujtaba-ali.vercel.app/static/media/header-img.1c0118c3bc802a747396.png' Title='Title 2'/>
        <CategoryCard imgURL='https://mujtaba-ali.vercel.app/static/media/header-img.1c0118c3bc802a747396.png' Title='Title 3'/>
        <CategoryCard imgURL='https://mujtaba-ali.vercel.app/static/media/header-img.1c0118c3bc802a747396.png' Title='Title 3'/>
        <CategoryCard imgURL='https://mujtaba-ali.vercel.app/static/media/header-img.1c0118c3bc802a747396.png' Title='Title 3'/>
        <CategoryCard imgURL='https://mujtaba-ali.vercel.app/static/media/header-img.1c0118c3bc802a747396.png' Title='Title 3'/>
        <CategoryCard imgURL='https://mujtaba-ali.vercel.app/static/media/header-img.1c0118c3bc802a747396.png' Title='Title 3'/>
       

    </ScrollView>
  )
}

export default Categories