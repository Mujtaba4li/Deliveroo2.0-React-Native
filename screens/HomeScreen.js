import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { AntDesign,FontAwesome5 } from '@expo/vector-icons'; 

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      //   headerTitle: "Mujtaba",
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className='bg-white pt-10'>
      <View className="flex-row space-x-3 space-y-0 align-middle ml-2">
        <Image
          source={{
            uri: "https://mujtaba-ali.vercel.app/static/media/header-img.1c0118c3bc802a747396.png",
          }}
          className="h-8 w-8 rounded-full bg-emerald-500 p-5"
        />
        <View>
          <Text className="text-slate-500 text-xs">Deliver Now!</Text>
          <Text className="text-lg font-bold">Current Location <AntDesign name="caretdown" size={15} color="#00CCBB" /></Text>
        </View>
        <View className='absolute right-5'>
        <FontAwesome5 name="user" size={32} color="#00CCBB" />
        </View>
      </View>
    </SafeAreaView>
  );
}
