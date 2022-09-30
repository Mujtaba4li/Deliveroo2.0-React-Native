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
import { removeFromBasket, selectBasketItems } from "../features/basketSlice";
import { useSelector } from "react-redux";
import Currency from "react-currency-formatter";
import { useNavigation } from "@react-navigation/native";
import { urlFor } from "../lib/client";
import { useDispatch } from "react-redux";
const BasketScreen = () => {
  const navigation = useNavigation();
  const returants = useSelector(selectResturant);
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
        <ScrollView className='mt-3'>
          {Object.entries(GroupItemInBasket).map(([key, items]) => (
            <View key={key} className="flex-row items-center bg-white py-2 px-5 space-x-3 ">
             
              <Text>{items.length}x</Text>

              <Image
                source={{
                  uri: urlFor(items[0]?.imgURL).url(),
                }}
                className="h-10 w-10 rounded-full "
              />
              <Text className='flex-1 font-semibold'>{items[0]?.name}</Text>
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
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
