import { View, Text, SafeAreaView, Image, TextInput,ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import Categories from "../components/Categories";
import FeatureRow from "../components/FeatureRow";
import { client } from "../lib/client";
function handleLcoation(){
  alert("Working..");
}
export default function HomeScreen() {
  const navigation = useNavigation();
// const [featureCategory, setfeatureCategory] = useState([])
  useLayoutEffect(() => {
    navigation.setOptions({
      //   headerTitle: "Mujtaba",
      headerShown: false,
    });
  }, []);
  // useEffect(() => {
  //   const query = `*[ _type == "resturant" ]{
  //     ...
        
  //     }`;
  //  client.fetch(query).then((data)=>{
  //   setfeatureCategory(data);
  //  })
   
  // }, [])
  
  return (
    <SafeAreaView className="bg-white pt-10">
      <View className="flex-row space-x-3 space-y-0 align-middle ml-2">
        <Image
          source={{
            uri: "https://mujtaba-ali.vercel.app/static/media/header-img.1c0118c3bc802a747396.png",
          }}
          className="h-8 w-8 rounded-full bg-emerald-500 p-5"
        />
        <View>
          <Text className="text-slate-500 text-xs">Deliver Now!</Text>
          <Text className="text-lg font-bold">
            Current Location{" "}
            <AntDesign name="down" size={15} color="#00CCBB" onClick={handleLcoation} />
          </Text>
        </View>
        <View className="absolute right-5">
          <FontAwesome5 name="user" size={32} color="#00CCBB" />
        </View>
      </View>
      <View className="flex-row">
        <View className="bg-gray-200 flex-row flex-1 p-2 m-2 space-x-2">
          <Octicons name="search" size={24} color="grey" />
          <TextInput
            placeholder="Resturants and Refereshment"
            keyboardType="default"
          />
        </View>
        <View className="m-4">
          <MaterialCommunityIcons
            name="tune-vertical"
            size={24}
            color="#00CCBB"
          />
        </View>
      </View>
      <ScrollView>
       <Categories/>
       <FeatureRow 
       title='Features'
       description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iusto suscipit facilis?'
       />
       <FeatureRow 
       title='Tasty Discounts'
       description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iusto suscipit facilis?'
       />
       <FeatureRow 
       title='Offers Near You!'
       description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iusto suscipit facilis?'
       />
      </ScrollView>
    </SafeAreaView>
  );
}
