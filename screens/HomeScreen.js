import { View, Text, SafeAreaView } from "react-native";
import React,{useLayoutEffect} from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
 
  useLayoutEffect(() => {
    navigation.setOptions({
    //   headerTitle: "Mujtaba",
    headerShown:false,
    });
  }, []);
  return (
    <SafeAreaView>
    <View>
      <Text className=" text-red-700">HomeScreen</Text>
    </View>
    </SafeAreaView>
  );
}
