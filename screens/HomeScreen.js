import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      //   headerTitle: "Mujtaba",
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <View className='flex-row space-x-2 align-middle ml-2'>
        
        <Image
          source={{
            uri: "https://mujtaba-ali.vercel.app/static/media/header-img.1c0118c3bc802a747396.png",
          }}
          className="h-8 w-8 rounded-full bg-emerald-500 p-5"
        />
        <View>
          <Text className=' text-slate-500 text-xs'>Deliver Now!</Text>
          <Text className='text-lg font-bold'>Current Location</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
