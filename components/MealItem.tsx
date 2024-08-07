import { View, Text } from "react-native";
import { mealItemTypes } from "@/types/meal";

const MealItem = ({ title }: mealItemTypes) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default MealItem;
