import {
  Image,
  Pressable,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { PureComponent } from "react";
import Currency from "react-currency-formatter";
import { urlFor } from "../Sanity";
export default class DishRow extends PureComponent {
  render() {
    const { dishData } = this.props;
    return (
      <TouchableOpacity className="bg-white border p-4 border-gray-200">
        <View className="flex-row">
          <View className="flex-1 mr-2">
            <Text className="text-lg mb-1">{dishData.name}</Text>
            <Text className="text-gray-400">{dishData.sdesc}</Text>
            <Text className="text-gray-400 mt-2">
              <Currency quantity={dishData.price} currency="INR" />
            </Text>
          </View>
          <View>
            <Image
              style={{ borderWidth: 1, borderColor: "#F3F3F4" }}
              source={{ uri: urlFor(dishData.imgUrl).url() }}
              className="w-20 h-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
