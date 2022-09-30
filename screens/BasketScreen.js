import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useMemo, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { selectResturant } from "../features/resturantSlice";
import { selectBasketItems } from "../features/basketSlice";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

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

  console.log(setGroupItemInBasket);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-400">
        <View className="p-5 border-b border=[#00ccbb] bg-white shadow-sm">
          <View>
            <Text className='text-lg font-bold text-center'>Basket</Text>
            <Text className='text-sm font-light text-center'>{returants.title}</Text>
          </View>
          <TouchableOpacity onPress={navigation.goBack}
          className='absolute top-5 right-3 '>
          <Entypo name="circle-with-cross" size={30} color="#00ccbb" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
