import { View, Text } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const BasketScreen = () => {
  return (
    <View className="bg-slate-200">
      <View class="flex-row bg-white">
        <Text>Basket</Text>
        <Text>
          <Entypo name="circle-with-cross" size={24} color="#00ccbb" />
        </Text>
      </View>
    </View>
  );
};

export default BasketScreen;
