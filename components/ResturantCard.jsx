import { View, Text, TouchableOpacity, Image } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import React from "react";

const ResturantCard = ({
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
}) => {
  return (
    <TouchableOpacity className=" bg-white space-x-1 ml-2 rounded pb-2">
      <Image
        source={{
          uri: imgURL,
        }}
        className="h-36 w-56 rounded"
      />
      <View className='p-1'>
        <Text className="font-bold text-xl pt-1">{title}</Text>
        <View className="flex-row space-x-1">
          <Text>
            <AntDesign name="star" size={14} color="#ff9529" />
          </Text>
          <Text className="text-gray-500">
            {rating} • {gendre}
          </Text>
        </View>
        <View className="flex-row space-x-1">
          <Text>
            <Entypo name="location-pin" size={17} color="green" />
          </Text>
          <Text className="text-gray-500">{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ResturantCard;
