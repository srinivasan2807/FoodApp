import React, { PureComponent } from "react";
import { ScrollView, Text, View } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import client from "../Sanity";
import RestaurantCard from "./RestaurantCard";

const restauarntQuery = `*[_type == "featured" && _id == $rid]{
  ...,
  restaurants[]->{
      ...,
    dishes[]->,
      type->{
      name,
    },
  }     
}[0]`;
class FeaturedRow extends PureComponent {
  state = {
    data: [],
  };

  async componentDidMount() {
    await client
      .fetch(restauarntQuery, { rid: this.props.id })
      .then((data) => this.setState({ data: data.restaurants }));
  }

  render() {
    return (
      <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
          <Text className="font-bold text-lg">{this.props.title}</Text>
          <ArrowRightIcon color={"#00CCBB"} />
        </View>
        <Text className="text-xs text-gray-500 px-4">{this.props.desc}</Text>
        <ScrollView
          horizontal
          contentContainerStyle={{
            paddingHorizontal: 15,
          }}
          showsHorizontalScrollIndicator={false}
          className="pt-4"
        >
          {/* {Restuarants Cards} */}
          {this.state.data.map((data) => (
            <RestaurantCard
              key={data._id}
              restData={{
                id: data._id,
                imgUrl: data.image,
                address: data.address,
                title: data.name,
                dishes: data.dishes,
                rating: data.ratings,
                desc: data.short_desc,
                genre: data.type?.name,
                lat: data.lat,
                long: data.long,
              }}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}
export default FeaturedRow;
