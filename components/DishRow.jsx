import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../lib/client";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from "../features/basketSlice";

const DishRow = ({ id, name, price, description, imgURL }) => {
  const [isPressed, setisPressed] = useState(false);
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  // console.log(items);
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, price, description, imgURL }));
  };
  const removeItemFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => setisPressed(!isPressed)}
        className={`flex-row space-x-2 border-y-2 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
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
      {isPressed && (
        <View className="flex-row p-3 space-x-4 text-center align-middle items-center">
          <TouchableOpacity
            className="rounded-full p-1 bg-teal-500"
            onPress={removeItemFromBasket}
          >
            <AntDesign name="minus" size={20} color="white" />
          </TouchableOpacity>

          <Text className="align-middle">{items.length} </Text>

          <TouchableOpacity
            className="rounded-full p-1 bg-teal-500"
            onPress={addItemToBasket}
          >
            <AntDesign name="plus" size={20} color="white" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default DishRow;
