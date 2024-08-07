import { View, FlatList, StyleSheet } from "react-native";

import { MEALS } from "@/data/dummy-data";
import { navigationProps } from "@/types/category";
import { mealItemTypes } from "@/types/meal";
import MealItem from "@/components/MealItem";

const MealsOverviewScreen: React.FC<navigationProps> = ({ route }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  const renderMealItem = (itemData: { item: mealItemTypes }) => {
    return <MealItem title={itemData.item.title} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
