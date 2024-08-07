import React from "react";
import { FlatList } from "react-native";

import { CATEGORIES } from "@/data/dummy-data";
import { Category } from "@/types/category";
import { navigationProps } from "@/types/category";
import CategoryGridTile from "@/components/CategoryGridTile";

const CategoriesScreen: React.FC<navigationProps> = ({ navigation }) => {
  const renderCategoryItem = (itemData: { item: Category }) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

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
