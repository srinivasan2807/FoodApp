import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    Image,
    Platform, SafeAreaView, Text, TouchableOpacity, View
} from "react-native";
import { XMarkIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/RestauarantSlice";
const DeliveryScreen = () => {
  const navigation = useNavigation();
  const { restauarant } = useSelector(selectRestaurant);
  return (
    <View className="flex-1 bg-[#00CCBB]">
      <SafeAreaView className="z-50">
        <View className="flex-row items-center justify-between p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon color={"white"} size={20} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">40-55 Minutes</Text>
            </View>
            <Image
              source={{ uri: "https://links.papareact.com/fls" }}
              className="w-20 h-20"
            />
          </View>
          <Progress.Bar
            color="#00CCBB"
            indeterminate={true}
            shouldRasterizeIOS={true}
            animationType={"spring"}
            width={200}
          />
          <Text className="mt-5 text-gray-500">
            Your order at {restauarant.data.title} is prepared!
          </Text>
        </View>
      </SafeAreaView>
      {Platform.OS === "web" ? (
        <View className="flex-1 -mt-10 z-0 bg-white">
          <View className="items-center justify-center flex-1">
            <Text className="text-lg bg-white"> MAP GOES HERE!!!</Text>
          </View>
        </View>
      ) : (
        <></>
      )}

      <SafeAreaView className={"flex-row bg-white items-center space-x-5 h-28"}>
        <Image
          source={{
            uri:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWHGFgsFsWZiRlyz4YWqGBvoNeeWmXRA-T5Q&usqp=CAU",
          }}
          className="w-12 h-12 bg-gray-300 rounded-full p-4 ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg">Morgan Freeman</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
