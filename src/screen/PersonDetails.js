import React from "react";
import { View, StyleSheet } from "react-native";
import SvgQRCode from "react-native-qrcode-svg";

const PersonDetails = () => {
  return (
    <View style={{ flex: 10 }}>
      <View style={{ flex: 5, alignSelf: "center", justifyContent: "center" }}>
        <SvgQRCode
          value="https://www.youtube.com/watch?v=geZ_5Ri7ANg"
          size={140}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PersonDetails;
