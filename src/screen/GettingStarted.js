import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

const GettingStarted = ({ navigation }) => {
  return (
    <View style={styles.constainer}>
      <View style={styles.logoCon}>
        <Image
          style={styles.logoImage}
          source={{
            uri: "https://images.unsplash.com/photo-1601158935942-52255782d322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3N8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
          }}
        />
      </View>
      <View style={styles.companyTitle}>
        <Text>TESLA </Text>
        <Text>INDUSTRIES</Text>
      </View>
      <View style={styles.btnCon}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("welcome");
          }}
        >
          <Text>GET STARTED</Text>
          <View
            style={{
              borderWidth: 1,
              borderBottomColor: "black",
              marginLeft: 10,
              width: 100,
              marginTop: 3,
            }}
          ></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 10,
    backgroundColor: "#eeebe3",
  },
  logoCon: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  companyTitle: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  btnCon: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    height: 80,
    width: 220,
  },
});

export default GettingStarted;
