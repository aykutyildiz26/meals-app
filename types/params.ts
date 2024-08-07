import { RouteProp } from "@react-navigation/native";

type RootStackParamList = {
  Categories: { categoryId: string };
};

export type CategoriesScreenRouteProp = RouteProp<
  RootStackParamList,
  "Categories"
>;
