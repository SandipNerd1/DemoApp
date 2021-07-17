import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { AntDesign } from "@expo/vector-icons";

const CustomHeaderButtons = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={AntDesign}
      iconSize={30}
      color="white"
    />
  );
};

export default CustomHeaderButtons;
