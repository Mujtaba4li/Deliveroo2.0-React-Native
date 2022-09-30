import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useSelector } from "react-redux";
import resturantSlice, { selectResturant } from "../features/resturantSlice";
import MapView, { Marker } from "react-native-maps";
const DeliveryScreen = () => {
  const resturants = useSelector(selectResturant);
  console.log(resturants);
  const navigation = useNavigation();
  return (
    <View className="bg-[#00ccbb] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row items-center justify-between p-3">
          <TouchableOpacity
            className=""
            onPress={() => navigation.navigate("Home")}
          >
            <Entypo name="cross" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-white font-semibold text-base ">
              Order Help
            </Text>
          </TouchableOpacity>
        </View>
        <View className="bg-white p-5 flex-row rounded m-2">
          <View className="space-y-1">
            <Text className="text-gray-400">Estimate Arrival</Text>
            <Text className="font-extrabold text-3xl">45-50 Minutes</Text>
            <Progress.Bar size={70} indeterminate={true} color="aqua" />
            <Text>Your order at {resturants.title} being prepared</Text>
          </View>
          <View className=" absolute right-4 top-4">
            <Animatable.Image
              source={require("../assets/delivery.gif")}
              // animation="slideInUp"
              iterationCount={1}
              className="h-16 w-16 rounded-xl"
            />
          </View>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: resturants.lat,
          longitude: resturants.long,

          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: resturants.lat,
            longitude: resturants.long,
          }}
          title={resturants.title}
          description={resturants.short_description}
          identifier="origin"
          pinColor="#00ccbb"
        ></Marker>
      </MapView>
      <SafeAreaView className="bg-white">
        <View className="h-10 mt-5 p-x-4">
          <View className="flex-row space-x-3 space-y-0 align-middle ml-2">
            <Image
              source={{
                uri: "https://mujtaba-ali.vercel.app/static/media/header-img.1c0118c3bc802a747396.png",
              }}
              className="h-8 w-8 rounded-full bg-[#00ccbb] p-4"
            />
            <View>
              <Text className="text-lg font-bold">Mujtaba Ali</Text>
            </View>
            <View className="absolute right-5">
              <TouchableOpacity onPress={()=>alert('Call on: +923046511650')}>
                <Text  className='text-[#00ccbb] font-bold'>Contact</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
