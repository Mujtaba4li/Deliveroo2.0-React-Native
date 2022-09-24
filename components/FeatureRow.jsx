import { View, Text } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
const FeatureRow = (props) => {
  return (
    <View className="p-4">
      <View className='flex-row items-center'>
        <Text>{props.title}</Text>
        <FontAwesome5 name="arrow-right" size={18} color="#00CCBB"/>
      </View>
      <Text>{props.description}</Text>
    </View>
  );
};

export default FeatureRow;
