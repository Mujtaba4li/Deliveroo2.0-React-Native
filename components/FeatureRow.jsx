import { View, Text, ScrollView } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import ResturantCard from "./ResturantCard";
const FeatureRow = (props) => {
  return (
    <View className="p-4">
      <View className='flex-row items-center justify-between'>
        <Text className='font-extrabold'>{props.title}</Text>
        <FontAwesome5 name="arrow-right"  size={18} color="#00CCBB"/>
      </View>

      <Text className='text-xs text-gray-400'>{props.description}</Text>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal:15,
      }}
      >
        <ResturantCard 
       id={123}
       imgURL="https://mujtaba-ali.vercel.app/static/media/header-img.1c0118c3bc802a747396.png"
       title='Yo! Suchi'
       rating={4.5}
       gendre='Japenese'
       short_description='This is short description '
       address='Islamabad, Pakistan'
       dishes={[]}
       long={20}
       lat={0}
        
        />

      </ScrollView>
    </View>
  );
};

export default FeatureRow;
