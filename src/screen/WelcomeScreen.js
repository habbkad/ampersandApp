import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageCon}>
        <Image
          style={styles.image}
          source={{
            uri: "https://images.unsplash.com/photo-1662390837659-95a93536fedb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
          }}
        />
      </View>
      <View style={styles.introText}>
        <Text style={{ fontSize: 17 }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Text>
        <Text style={{ fontSize: 12, marginTop: 5 }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Text>
      </View>
      <View style={styles.btnCon}>
        <TouchableOpacity>
          <Text style={{ borderBottomWidth: 1, borderBottomColor: "black" }}>
            REGISTER
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("login");
          }}
        >
          <Text style={{ borderBottomWidth: 1, borderBottomColor: "black" }}>
            SIGN IN
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
  },
  imageCon: {
    flex: 5,
  },
  introText: {
    marginTop: 10,
    flex: 3,
  },
  btnCon: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 30,
  },
  image: {
    height: "100%",
  },
});

export default WelcomeScreen;
