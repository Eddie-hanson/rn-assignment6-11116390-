import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HeadComponent from "./head";
import SubHeadComponent from "./SubHead";
import addIcon from "../assets/add_circle.png";

const products = [
  {
    id: "1",
    name: "Office Wear",
    price: 120,
    description: "reversible angora cardigan",
    image: require("../assets/dress1.png"),
  },
  {
    id: "2",
    name: "Black",
    price: 120,
    description: "reversible angora cardigan",
    image: require("../assets/dress2.png"),
  },
  {
    id: "3",
    name: "Church Wear",
    price: 120,
    description: "reversible angora cardigan",
    image: require("../assets/dress3.png"),
  },
  {
    id: "4",
    name: "Lameri",
    price: 120,
    description: "reversible angora cardigan",
    image: require("../assets/dress4.png"),
  },
  {
    id: "5",
    name: "21WN",
    price: 120,
    description: "reversible angora cardigan",
    image: require("../assets/dress5.png"),
  },
  {
    id: "6",
    name: "Lopo",
    price: 120,
    description: "reversible angora cardigan",
    image: require("../assets/dress6.png"),
  },
  {
    id: "7",
    name: "21WN",
    price: 120,
    description: "reversible angora cardigan",
    image: require("../assets/dress7.png"),
  },
  {
    id: "8",
    name: "Lame",
    price: 120,
    description: "reversible angora cardigan",
    image: require("../assets/dress3.png"),
  },
];

const HomeScreen = ({ navigation }) => {
  const [cart, setCart] = useState([]);

  const addToCart = async (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const loadCart = async () => {
      const cartData = await AsyncStorage.getItem("cart");
      if (cartData) {
        setCart(JSON.parse(cartData));
      }
    };
    loadCart();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.productItem}>
      <Image source={item.image} style={styles.productImage} />
      <TouchableOpacity
        onPress={() => addToCart(item)}
        style={styles.addButton}
      >
        <Image source={addIcon} style={styles.addIcon} />
      </TouchableOpacity>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <HeadComponent />
      <SubHeadComponent />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.productList}
      />
      <Button title="Go to Cart" onPress={() => navigation.navigate("Cart")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productList: {
    paddingHorizontal: 10,
  },
  productItem: {
    paddingHorizontal: 5,
    flexDirection: "column",
    alignItems: "right",
  },
  productImage: {
    width: 170,
    height: 250,
    resizeMode: "contain",
  },
  productName: {
    fontSize: 20,
    fontWeight: "light",
    marginTop: 5,
  },
  productDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
    opacity: 0.8,
  },
  productPrice: {
    fontSize: 18,
    color: "#ff751a",
    marginTop: 5,
  },
  addButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  addIcon: {
    width: 24,
    height: 24,
    top: -80,
  },
});

export default HomeScreen;
