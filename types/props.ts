import { Ionicons } from "@expo/vector-icons";
import { ReactNode } from "react";

export interface ComponentWithChildrenProps {
  children: ReactNode;
}

export type IconButtonProps = {
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  color: string;
};
