import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome5 } from "@expo/vector-icons";

import HomeScreen from "../newscreens/HomeScreen";
import TeamScreen from "../newscreens/TeamScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButtons from "../newcomponents/CustomHeaderButton";

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="home" component={HomeScreen} />
      <HomeStack.Screen
        name="team"
        component={TeamScreen}
        options={{
          headerStyle: { backgroundColor: "rgb(255,146,0)" },
          headerTintColor: "white",
          headerTitle: "My Team",
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButtons}>
              <Item iconName="questioncircleo" />
            </HeaderButtons>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
