import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectItemsById,
} from "../features/BasketSlice";
import { urlFor } from "../Sanity";

const DishRow = ({ id, name, sdesc, price, imgUrl }) => {
  const [isPressed, setisPressed] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => selectItemsById(state, id));
  const showToast = () => {
    Alert.alert("No Items in basket", "Please Add one ");
  };
  const addItem = () => {
    dispatch(addToBasket({ id, name, sdesc, price, imgUrl }));
  };
  const removeFromCart = () => {
    if (!items.length > 0) return { showToast };
    dispatch(removeFromBasket({ id }));
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => setisPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 mr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{sdesc}</Text>
            <Text className="text-gray-400 mt-2">
              <Currency quantity={price} currency="INR" />
            </Text>
          </View>
          <View>
            <Image
              style={{ borderWidth: 1, borderColor: "#F3F3F4" }}
              source={{ uri: urlFor(imgUrl).url() }}
              className="w-20 h-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity disabled={!items.length} onPress={removeFromCart}>
              <MinusCircleIcon
                color={items.length > 0 ? "#00FFBB" : "gray"}
                size={40}
              />
            </TouchableOpacity>

            <Text>{items.length}</Text>

            <TouchableOpacity onPress={addItem}>
              <PlusCircleIcon color={"#00FFBB"} size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
