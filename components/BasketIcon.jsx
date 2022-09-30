import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import CurrencyFormat from "react-currency-formatter";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const totalBasket = useSelector(selectBasketTotal);
  if(items.length===0) return;
  return (
    <View className="absolute bottom-10 z-50 w-full" >
      <TouchableOpacity onPress={()=>navigation.navigate('Basket')} className="mx-3 space-x-1 p-4 items-center flex-row rounded-lg  bg-[#00ccbb]">
        <Text className="font-bold text-base py-1 px-2 bg-[#01a296]  text-white">
           <AntDesign name="shoppingcart" size={20} color="white" /> {items.length}
        </Text>
        <Text className="flex-1 text-xl font-extrabold text-white text-center pl-4">
        View Basket 
        </Text>
        <Text className="text-white font-bold text-sm">
          <CurrencyFormat quantity={totalBasket} currency="PKR" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;