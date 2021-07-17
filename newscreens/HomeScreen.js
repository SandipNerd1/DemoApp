import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Home</Text>
      <Button
        title="click"
        onPress={() => {
          props.navigation.navigate("team");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
