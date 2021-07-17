import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Dimensions,
} from "react-native";

import ImageWithoutOpacity from "../newcomponents/ImageWithourOpacity";
import ImageWithOpacity from "../newcomponents/ImageWithOpacity";
import CustomButton from "../newcomponents/CustomButton";
import Line from "../newcomponents/Line";

const { width, height } = Dimensions.get("window");

const TeamScreen = () => {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="light-content" backgroundColor="rgb(255,171,58)" />

      <ImageBackground
        source={require("../assets/flat.png")}
        style={{
          width: width,
          height: height - (StatusBar.currentHeight + 30),
        }}
      >
        <View style={[styles.row, { paddingTop: 20 }]}>
          <ImageWithoutOpacity
            textPosition="center"
            generation="Self"
            imageLocation={require("../assets/rohit1.png")}
          />
        </View>
        <View style={[styles.row, { marginTop: -width / 10 }]}>
          <ImageWithoutOpacity
            teamMembers="10"
            amount="500"
            textPosition="left"
            generation="1st Gen.."
            imageLocation={require("../assets/trophy1copy.png")}
          />
          <View style={{ marginHorizontal: 15 }}>
            <Line lineWidth={100} />
          </View>

          <ImageWithoutOpacity
            teamMembers="100"
            amount="1000"
            textPosition="right"
            generation="2nd Gen.."
            imageLocation={require("../assets/trophy2.png")}
          />
        </View>
        <View style={{ marginTop: -width / 10, alignItems: "center" }}>
          <View style={styles.diagonal1}>
            <Line lineWidth={50} />
          </View>
          <ImageWithOpacity
            teamMembers="1.k"
            amount="700"
            textPosition="center"
            generation="3rd Gen.."
            imageLocation={require("../assets/trophy3.png")}
          />
          <View style={styles.diagonal2}>
            <Line lineWidth={50} />
          </View>
        </View>

        <View style={[styles.row, { marginTop: -width / 10 }]}>
          <ImageWithOpacity
            teamMembers="5.k"
            amount="2500"
            textPosition="left"
            generation="4th Gen.."
            imageLocation={require("../assets/trophy4.png")}
          />
          <View style={{ marginHorizontal: 15 }}>
            <Line lineWidth={100} />
          </View>

          <ImageWithOpacity
            teamMembers="10.k"
            amount="1000"
            textPosition="right"
            generation="5th Gen.."
            imageLocation={require("../assets/trophy5.png")}
          />
        </View>
        <View style={{ position: "absolute", left: 0, bottom: 10 }}>
          <CustomButton teamText="ALL TEAM MEMBERS" iconName="users" />
          <CustomButton teamText="TOTAL INCOME" iconName="rupee-sign" />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  diagonal1: {
    right: 110,
    transform: [{ rotate: "-45deg" }],
    position: "absolute",
  },
  diagonal2: {
    left: 100,
    bottom: 30,
    transform: [{ rotate: "-45deg" }],
    position: "absolute",
  },
});

export default TeamScreen;
