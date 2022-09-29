import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { urlFor } from "../lib/client";
import { AntDesign } from "@expo/vector-icons";

const DishRow = ({ name, price, description, imgURL }) => {
  return (
    <View>
   
      <TouchableOpacity className="flex-row space-x-2 border-y-2 border-gray-200">
        <View className="flex-1 pt-4 p-3">
          <Text className="font-bold text-lg">{name}</Text>
          <Text className="text-sm text-gray-500">{description}</Text>
          <Text className="mt-2 font-semibold text-gray-500 text-xs">
            PKR: {price}
          </Text>
        </View>
        <View className=" pt-4 p-3">
          <Image
            source={{
              uri: urlFor(imgURL).url(),
            }}
            className="h-20 w-20 p-4"
          />
        </View>
      </TouchableOpacity>
      <View className="flex-row p-3 space-x-4 text-center align-middle bg-red-800">
        <TouchableOpacity className="rounded-full p-1 bg-teal-500">
          <AntDesign name="minus" size={20} color="white" />
        </TouchableOpacity>
        <Text className='align-middle top-2'>0</Text>
        <TouchableOpacity className="rounded-full p-1 bg-teal-500">
          <AntDesign name="plus" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DishRow;
