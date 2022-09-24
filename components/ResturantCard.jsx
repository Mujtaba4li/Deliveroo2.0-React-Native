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
    <TouchableOpacity>
      <Image
        source={{
          uri: imgURL,
        }}
        className="h-36 w-56 rounded"
      />
      <Text>{title}</Text>
      <View>
        <Text>
          <AntDesign name="star" size={24} color="black" />
        </Text>
        <Text>{rating}</Text>
      </View>
      <View>
        <Text>
          <Entypo name="location-pin" size={24} color="black" />
        </Text>
        <Text>Nearby • {address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ResturantCard;
