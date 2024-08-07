import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { CategoriesScreenRouteProp } from "./params";

export type Category = {
  id: string;
  title: string;
  color: string;
};

export type categoryGridTitleTypes = {
  title: string;
  color: string;
  onPress: () => void;
};

export type navigationProps = {
  navigation: NavigationProp<ParamListBase>;
  route: CategoriesScreenRouteProp;
};
