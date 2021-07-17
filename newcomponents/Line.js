import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Line = (props) => {
  const newLineWidth = props.lineWidth - 5;
  const updatedLine = newLineWidth / 2;
  return (
    <View style={[styles.lineContainer, { width: newLineWidth }]}>
      <View style={[styles.line, { width: updatedLine }]} />
      <View style={styles.circle} />
      <View style={[styles.line, { width: updatedLine }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  lineContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  line: { backgroundColor: "grey", height: 2 },
  circle: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: "red",
  },
});

export default Line;
