import { View, Text, Image } from "react-native";
import React from "react";
import { urlFor } from "../lib/client";

const DishRow = ({ name, price, description, imgURL }) => {
  return (
    <View className='flex-row space-x-2 border-y-2 border-gray-200'>
      <View className='flex-1 pt-4 p-3'>
        <Text >{name}</Text>
        <Text>{description}</Text>
        <Text>{price}</Text>
      </View>
      <View className=' pt-4 p-3'>
        <Image
          source={{
            uri: urlFor(imgURL).url(),
          }}
          className="h-20 w-20 p-4"
        />
      </View>
    </View>
  );
};

export default DishRow;
