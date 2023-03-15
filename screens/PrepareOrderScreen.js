import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
const PrepareOrderScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, [navigation]);
  return (
    <SafeAreaView className="flex-1 bg-[#00CCBB] justify-center items-center">
      <Animatable.Image
        source={require("../assets/orderpreparing.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="w-96 h-96"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className={"text-lg font-bold text-white text-center my-10"}
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle
        size={60}
        fill="none"
        indeterminate={true}
        color={"white"}
        animated={true}
      />
    </SafeAreaView>
  );
};

export default PrepareOrderScreen;
