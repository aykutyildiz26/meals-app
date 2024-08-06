import React from "react";
import { FlatList } from "react-native";

import { CATEGORIES } from "@/data/dummy-data";
import CategoryGridTile from "@/components/CategoryGridTile";

type Category = {
  id: string;
  title: string;
  color: string;
};

const renderCategoryItem = (itemData: { item: Category }) => {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
};

const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
