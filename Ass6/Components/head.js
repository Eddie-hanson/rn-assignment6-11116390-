// components/HeaderComponent.js
import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const HeadComponent = () => {
  return (
    <View style={styles.head}>
      <Image source={require("../assets/Menu.png")} style={styles.icon} />

      <Image
        source={require("../assets/Logo.png")}
        style={{
          marginRight: -155,
          height: 40,
          width: 100,
        }}
      />

      <View style={styles.rightIcons}>
        <Image source={require("../assets/Search.png")} style={styles.icon} />
        <Image
          source={require("../assets/shoppingBag.png")}
          style={styles.logo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: -20,
  },
  logo: {
    width: 100,
    height: 20,
    resizeMode: "contain",
  },
  rightIcons: {
    marginLeft: 80,
    flexDirection: "row",
    marginRight: -35,
  },
  bagIcon: {
    marginLeft: 1,
  },
});

export default HeadComponent;
