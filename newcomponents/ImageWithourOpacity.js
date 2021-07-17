import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  PixelRatio,
  Dimensions,
} from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const ImageWithoutOpacity = (props) => {
  return (
    <View>
      <Text style={[styles.genText, { textAlign: props.textPosition }]}>
        {props.generation}
      </Text>
      <View style={{ alignItems: "center" }}>
        <ImageBackground style={styles.image} source={props.imageLocation} />
        {props.teamMembers ? (
          <Text>
            <Text style={{ fontSize: 11, color: "black" }}>Team Members </Text>
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>
              {props.teamMembers}
            </Text>
          </Text>
        ) : (
          <Text style={{ fontWeight: "bold" }}>Rohit Mehta</Text>
        )}
        {props.amount && (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FontAwesome5 name="rupee-sign" size={10} color="rgb(255,146,0)" />
            <Text
              style={{
                fontSize: 13,
                color: "rgb(255,146,0)",
                fontWeight: "bold",
                paddingHorizontal: 3,
              }}
            >
              {props.amount}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  genText: {
    fontSize: 11,
    color: "rgb(255,146,0)",
    fontWeight: "bold",
  },
  image: {
    width: width / 4.5,
    height: width / 4.5,
    borderRadius: width / 4.5 / 2,
    borderColor: "rgb(255,146,0)",
    borderWidth: 2,
    overflow: "hidden",
  },
});

export default ImageWithoutOpacity;
