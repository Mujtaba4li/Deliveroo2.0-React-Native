import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import ResturantCard from "./ResturantCard";
import { client } from "../lib/client";
const FeatureRow = ({ id, title, description }) => {
  const [resturants, setresturants] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "featured" && _id==$id]{
        ...,
          resturants[]->{
            ..., 
            dishes[]->{
              ...,
              type[]->
            }
          }
        }[0]`,{id}
      )
      .then((data) => {
        // console.log();
        setresturants(data.resturants);
      });
  }, []);
  // console.log(resturants);
  return (
    <View className="p-4">
      <View className="flex-row items-center justify-between">
        <Text className="font-extrabold">{title}</Text>
        <FontAwesome5 name="arrow-right" size={18} color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-400">{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="bg-gray-100 pt-3 pb-3 rounded-lg"
      >
        {resturants?.map((resturant) => (
          <ResturantCard
            key={resturant._id}
            id={resturant._id}
            imgURL={resturant.image}
            title={resturant.resturantName}
            rating={resturant.rating}
            gendre="Pakistani Food"
            short_description={resturant.shortDescription}
            address={resturant.address}
            dishes={resturant.dishes}
            long={resturant.lon}
            lat={resturant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
