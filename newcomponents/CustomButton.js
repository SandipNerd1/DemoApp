import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const barWidth = width / 2 + 100;

const CustomButton = (props) => {
  const initialWidth = new Animated.Value(50);
  const textOpactiy = new Animated.Value(0);

  const expandAnimation = () => {
    Animated.parallel([
      Animated.timing(initialWidth, {
        toValue: barWidth,
        duration: 300,
      }),
      Animated.timing(textOpactiy, {
        toValue: 1,
        duration: 500,
      }),
    ]).start();
  };
  const hideAnimation = () => {
    Animated.parallel([
      Animated.timing(initialWidth, {
        toValue: 50,
        duration: 300,
      }),
      Animated.timing(textOpactiy, {
        toValue: 0,
        duration: 100,
      }),
    ]).start();
  };
  return (
    <Animated.View style={[styles.buttonContainer, { width: initialWidth }]}>
      <TouchableWithoutFeedback onPress={expandAnimation}>
        <View style={styles.iconContainer}>
          <FontAwesome5
            name={props.iconName}
            size={15}
            color="rgb(255,146,0)"
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={hideAnimation}>
        <Animated.Text style={[styles.text, { opacity: textOpactiy }]}>
          {props.teamText}
        </Animated.Text>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "rgb(255,146,0)",
    marginVertical: 5,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  text: {
    width: "70%",
    fontWeight: "bold",
    color: "white",
    paddingHorizontal: 10,
    height: "100%",
    textAlignVertical: "center",
    textAlign: "center",
  },
});

export default CustomButton;
