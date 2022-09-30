import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons, Entypo, AntDesign } from "@expo/vector-icons";
import { urlFor } from "../lib/client";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { useDispatch, useSelector } from "react-redux";
import {setResturant} from "../features/resturantSlice"
const ResturantScreen = () => {
  // route.params.title
  const {
    params: {
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
    },
  } = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setResturant({
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
    }));
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      //   headerTitle: "Mujtaba",
      headerShown: false,
    });
  }, []);

  return (
    <>
      <BasketIcon />
      <ScrollView className="bg-slate-200">
        <View className="relative">
          <Image
            source={{
              uri: urlFor(imgURL).url(),
            }}
            className="h-56 w-full p-4"
          />
          <TouchableOpacity
            className="absolute left-5 top-12 bg-white rounded-full p-1"
            onPress={navigation.goBack}
          >
            <Ionicons name="arrow-back" size={25} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="bg-white pt-4 p-3">
          <Text className="font-extrabold text-3xl">{title}</Text>
          <View className="flex-row mt-1">
            <View className="flex-row space-x-1">
              <Text>
                <AntDesign name="star" size={14} color="#ff9529" />
              </Text>
              <Text className="text-gray-500 text-xs">
                {rating} • {gendre}
              </Text>
            </View>
            <View className="flex-row space-x-1 ml-4">
              <Text>
                <Entypo name="location-pin" size={17} color="green" />
              </Text>
              <Text className="text-gray-500 text-xs">{address}</Text>
            </View>
          </View>
          <Text className="text-base pt-2 text-justify">
            {short_description}
          </Text>
        </View>

        <View>
          <Text className="font-bold text-lg pl-2">Menu</Text>
        </View>
        <View className="bg-white">
          {dishes?.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.dishName}
              price={dish.price}
              description={dish.shortDescription}
              imgURL={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default ResturantScreen;
