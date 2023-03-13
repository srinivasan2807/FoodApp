import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { PureComponent } from "react";
import { urlFor } from "../Sanity";
import {
  ArrowLeftIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import * as RootNavigation from "../RootNavigation";
import { ChevronRightIcon } from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";
class RestaurantScreen extends PureComponent {
  render() {
    const { route } = this.props;
    console.log(route.params.data.dishes);
    return (
      <ScrollView>
        <View>
          <Image
            source={{ uri: urlFor(route.params.data.imgUrl).url() }}
            className="w-full h-56 bg-gray-200 p-4"
          />
          <TouchableOpacity
            onPress={RootNavigation.navigationRef.goBack}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          >
            <ArrowLeftIcon size={20} color={"#00CCBB"} />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">
              {route.params.data.title}
            </Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-2">
                <StarIcon color={"green"} size={22} opacity={0.5} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-500">
                    {route.params.data.rating}
                  </Text>{" "}
                  . {route.params.data.genre}
                </Text>
              </View>
              <View className="flex-row items-center space-x-2">
                <MapPinIcon color={"gray"} size={22} opacity={0.5} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-gray-500">
                    Nearby . {route.params.data.address}
                  </Text>
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">
              {route.params.data.desc}
            </Text>
          </View>
          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon size={20} opacity={0.5} color={"gray"} />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food allergy?
            </Text>
            <ChevronRightIcon color={"#00CCBB"} />
          </TouchableOpacity>
        </View>
        <View>
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
          {/* {Dish Rows} */}
          {route.params.data.dishes.map((dish) => (
            <DishRow
              key={dish._id}
              dishData={{
                id: dish._id,
                name: dish.name,
                sdesc: dish.sdesc,
                price: dish.price,
                imgUrl: dish.image,
              }}
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}

export default RestaurantScreen;
