import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
const PreparingOrderScreen = () => {
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
        <Progress.Circle size={70} indeterminate={true} color="white" />
      </View>

    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
