// components/SubHeaderComponent.js
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Filter from "../assets/Filter.png";
import Listview from "../assets/Listview.png";

const SubHeadComponent = () => {
  return (
    <View style={styles.subheader}>
      <Text style={styles.ourStoryText}>OUR STORY</Text>
      <View style={styles.filterIcons}>
        <Image source={Listview} style={styles.subheaderImage} />
        <Image source={Filter} style={styles.subheaderImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ourStoryText: {
    fontSize: 18,
  },
  filterIcons: {
    flexDirection: "row",
    height: 34,
    width: 24,
    marginRight: 100,
  },
  subheaderImage: {
    marginLeft: 30,
    height: 24,
    width: 24,
  },
});

export default SubHeadComponent;
