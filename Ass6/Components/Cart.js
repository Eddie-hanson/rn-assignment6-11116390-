import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import remove from "../assets/remove.png"; // Ensure you have this icon in your assets folder
import logo from "../assets/Logo.png";
import searchIcon from "../assets/Search.png";

const cartProducts = [
  {
    id: "1",
    name: "OFFICE WEAR",
    price: 120,
    description: "Office wear for your office",
    image: require("../assets/dress1.png"),
  },
  {
    id: "2",
    name: "LAMEREI",
    price: 120,
    description: "Recycle Boucle Knit Cardigan Pink",
    image: require("../assets/dress4.png"),
  },
  {
    id: "3",
    name: "CHURCH WEAR",
    price: 120,
    description: "Recycle Boucle Knit Cardigan Pink",
    image: require("../assets/dress3.png"),
  },
];

const CartScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </View>
      <TouchableOpacity style={styles.removeButton}>
        <Image source={remove} style={styles.removeIcon} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image source={logo} style={styles.logo} />
        <Image source={searchIcon} style={styles.icon} />
      </View>
      <Text style={styles.checkoutText}>CHECKOUT</Text>
      <FlatList
        data={cartProducts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
      <View style={styles.summary}>
        <Text style={styles.totalText}>EST. TOTAL</Text>
        <Text style={styles.totalPrice}>$240</Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton}>
        <Image
          source={require("../assets/shoppingBag.png")}
          style={styles.checkoutIcon}
        />
        <Text style={styles.checkoutText}>CHECKOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  logo: {
    width: 150,
    height: 50,
    marginLeft: 80,
    resizeMode: "contain",
  },
  icon: {
    width: 24,
    height: 24,
  },
  checkoutText: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    alignSelf: "center",
  },
  list: {
    paddingBottom: 20,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  productImage: {
    width: 100,
    height: 150,
    resizeMode: "contain",
  },
  productDetails: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontSize: 15,
    fontWeight: "bold",
  },
  productDescription: {
    fontSize: 12,
    color: "#777",
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 16,
    color: "#ff751a",
  },
  removeButton: {
    padding: 10,
    marginBottom: -75,
  },
  removeIcon: {
    width: 24,
    height: 24,
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 0,
  },
  totalText: {
    fontSize: 16,
    letterSpacing: 2,
    marginRight: 190,
  },
  totalPrice: {
    fontSize: 16,
    color: "#ff751a",
  },
  checkoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    backgroundColor: "#000",
    marginLeft: -20,
    borderRadius: 5,
    width: 400,
    marginTop: 20,
  },
  checkoutIcon: {
    width: 24,
    height: 24,

    marginRight: 10,
    color: "#fff",
  },
  checkoutText: {
    fontSize: 16,
    color: "#fff",
  },
});

export default CartScreen;
