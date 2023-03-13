import React, { PureComponent } from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { urlFor } from "../Sanity";

export default class CategoryCard extends PureComponent {
  render() {
    const { id, title, imgUrl } = this.props;
    return (
      <TouchableOpacity className="relative mr-2">
        <Image
          source={{ uri: urlFor(imgUrl).width(200).url() }}
          className="w-20 h-20 rounded"
        />
        <Text className="absolute bottom-1 left-1 text-white font-bold">
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}
