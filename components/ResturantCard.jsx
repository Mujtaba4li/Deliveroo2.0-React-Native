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
    <TouchableOpacity className=' bg-white space-x-1 ml-2 rounded pb-2'>
      <Image
        source={{
          uri: imgURL,
        }}
        className="h-36 w-56 rounded"
      />
      <Text className='font-bold text-xl pt-2'>{title}</Text>
      <View className='flex-row space-x-2'>
        <Text>
          <AntDesign name="star" size={15} color="#ff9529" opa/>
        </Text>
        <Text>{rating}</Text>
      </View>
      <View className='flex-row space-x-1 pr-2'>
        <Text>
          <Entypo name="location-pin" size={19} color="green" />
        </Text>
        <Text>Nearby • {address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ResturantCard;
