import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);

  return (
    <SafeAreaView className="bg-[#00ccbb] flex-1 justify-center items-center p-20 space-y-12">
      <Animatable.Image
        source={require("../assets/order-processing.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-56 w-56 rounded-t-full"
      />
      <View className="justify-center items-center space-y-2">
        <Animatable.Text
          animation="slideInUp"
          iterationCount={1}
          direction="alternate"
          className="text-white font-extrabold text-base"
        >
          Waiting resturant to accept Order!
        </Animatable.Text>
        <Animatable.Text
          animation="slideInUp"
          iterationCount={1}
          direction="alternate"
          className="text-white font-extrabold text-base"
        >
          <Progress.Circle size={70} indeterminate={true} color="white" />
        </Animatable.Text>
      </View>
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
