import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useMemo, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { selectResturant } from "../features/resturantSlice";
import { removeFromBasket, selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useSelector } from "react-redux";
import CurrencyFormat from "react-currency-formatter";

import Currency from "react-currency-formatter";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../lib/client";
import { useDispatch } from "react-redux";
const BasketScreen = () => {
  const navigation = useNavigation();
  const returants = useSelector(selectResturant);
  const totalBasket = useSelector(selectBasketTotal);
  const items = useSelector(selectBasketItems);
  const [GroupItemInBasket, setGroupItemInBasket] = useState([]);
  // useMemo(() => first, [second])
  useMemo(() => {
    const groupedItems = items.reduce((res, item) => {
      (res[item.id] = res[item.id] || []).push(item);
      return res;
    }, {});

    setGroupItemInBasket(groupedItems);
  }, [items]);

  const dispatch = useDispatch();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00ccbb] bg-white shadow-sm">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-sm font-light text-center">
              {returants.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-5 right-3 "
          >
            <Entypo name="circle-with-cross" size={30} color="#00ccbb" />
          </TouchableOpacity>
        </View>
        {/* ========== */}
        <View className="flex-row space-x-3 space-y-0 align-middle mt-4 p-4 bg-white items-center">
          <Image
            source={{
              uri: "https://mujtaba-ali.vercel.app/static/media/header-img.1c0118c3bc802a747396.png",
            }}
            className="h-5 w-5 rounded-full bg-[#00ccbb] p-3"
          />
          <View>
            <Text className="text-sm font-bold text-gray-600 ">
              Deliver in 50-75 min{" "}
            </Text>
          </View>
          <View className="absolute right-5"></View>
        </View>

        {/* ========== */}
        <ScrollView className="mt-3 divide-y divide-gray-200">
          {Object.entries(GroupItemInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center bg-white py-2 px-5 space-x-3 "
            >
              <Text>{items.length}x</Text>

              <Image
                source={{
                  uri: urlFor(items[0]?.imgURL).url(),
                }}
                className="h-10 w-10 rounded-full "
              />
              <Text className="flex-1 font-semibold">{items[0]?.name}</Text>
              <Text>
                <Currency quantity={items[0]?.price} currency="PKR" />
              </Text>
              <TouchableOpacity>
                <Text
                  className="text-[#00bbcc] text-smright-2"
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className='bg-white'>
          <View className='flex-row items-center m-2'>
            <Text className='flex-1 text-gray-400'>Subtotal</Text>
            <Text className='text-gray-400'><CurrencyFormat quantity={totalBasket} currency="PKR" /></Text>
          </View>
          <View className='flex-row items-center m-2'>
            <Text className='flex-1 text-gray-400'>Delivery Fee</Text>
            <Text className='text-gray-400'><CurrencyFormat quantity={200} currency="PKR" /></Text>
            </View>
            <View className='flex-row items-center m-2'>
            <Text className='flex-1 text-black font-semibold text-lg '>Order total</Text>
            <Text className='text-black font-extrabold text-lg'><CurrencyFormat quantity={totalBasket+200} currency="Pkr" /></Text>
          </View>
          <View className="z-50 w-full">
            <TouchableOpacity
              onPress={() => navigation.navigate("PreparingOrder")}
              className="mx-3 space-x-1 p-4 items-center flex-row rounded-lg  bg-[#00ccbb]"
            >
              <Text className="flex-1 text-xl font-extrabold text-white text-center pl-4">
                Place Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
