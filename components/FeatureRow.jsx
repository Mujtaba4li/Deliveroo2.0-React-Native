import { View, Text, ScrollView } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
const FeatureRow = (props) => {
  return (
    <ScrollView className="p-4">
      <View className='flex-row items-center justify-between'>
        <Text className='font-extrabold'>{props.title}</Text>
        <FontAwesome5 name="arrow-right"  size={18} color="#00CCBB"/>
      </View>

      <Text className='text-xs text-gray-400'>{props.description}</Text>
    </ScrollView>
  );
};

export default FeatureRow;
