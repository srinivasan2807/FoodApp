import React, { PureComponent } from "react";
import { ScrollView } from "react-native";
import client from "../Sanity";
import CategoryCard from "./CategoryCard";
const queryCategory = `*[_type == "category"]`;
export default class Categories extends PureComponent {
  state = {
    categoryData: [],
  };

  async componentDidMount() {
    this.setState({ categoryData: await client.fetch(queryCategory) });
  }
  render() {
    return (
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
        showsHorizontalScrollIndicator
        false
        horizontal
      >
        {/* Categories */}
        {this.state.categoryData.map((data) => (
          <CategoryCard
            key={data._id}
            id={data._id}
            imgUrl={data.image}
            title={data.name}
          />
        ))}
      </ScrollView>
    );
  }
}
