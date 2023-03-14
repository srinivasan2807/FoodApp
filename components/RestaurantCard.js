import React, { PureComponent } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { MapPinIcon, StarIcon } from "react-native-heroicons/outline";
import { urlFor } from "../Sanity";
import * as RootNavigation from "../RootNavigation";
import { useNavigation } from "@react-navigation/native";
const RestaurantCard = (props) => {
  const {
    id,
    imgUrl,
    address,
    title,
    dishes,
    rating,
    desc,
    genre,
    lat,
    long,
  } = props;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          imgUrl,
          address,
          title,
          dishes,
          rating,
          desc,
          genre,
          lat,
          long,
        });
      }}
      className="bg-white shadow-sm"
    >
      <View className="px-2 pb-4">
        <Image
          source={{ uri: urlFor(imgUrl).url() }}
          className="w-64 h-36 rounded-sm"
        />
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color={"green"} opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> . {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <MapPinIcon color={"gray"} size={22} opacity={0.4} />
          <Text className="text-xs text-gray-500 w-0 flex-1">
            Nearby . {address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default RestaurantCard;
