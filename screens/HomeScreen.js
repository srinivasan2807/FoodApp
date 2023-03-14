import React, {
  PureComponent,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

import {
  AdjustmentsVerticalIcon,
  ArrowDownIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import client from "../Sanity";
const query = `*[_type == "featured"]{
  _id,name,short_desc,
  restaurants[]->{
      ...,
    dishes[]->
  }     
}`;
class HomeScreen extends PureComponent {
  state = {
    featured: [],
  };
  async componentDidMount() {
    this.setState({ featured: await client.fetch(query) });
  }

  render() {
    return (
      <SafeAreaView className="bg-white pt-5">
        {/* header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2 px-1">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="w-7 h-7 bg-gray-300 rounded-full"
          />
          <View className="flex-1">
            <Text className="text-xs font-bold text-gray-400">Deliver Now</Text>
            <Text className="text-xl font-bold">
              Current Location
              <ChevronDownIcon size={15} color="#00CCBB" />
            </Text>
          </View>
          <UserIcon size={35} color="#00CCBB" />
        </View>
        {/* Search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
            <MagnifyingGlassIcon color={"gray"} size={20} />
            <TextInput
              placeholder="Restaurants and cuisines"
              keyboardType="default"
            />
          </View>
          <AdjustmentsVerticalIcon color={"#00CCBB"} />
        </View>
        {/* Body */}
        <ScrollView>
          {/* Categories */}
          <Categories />
          {/* featured Row */}
          {this.state.featured.map((data) => (
            <FeaturedRow
              key={data._id}
              id={data._id}
              title={data.name}
              desc={data.short_desc}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
