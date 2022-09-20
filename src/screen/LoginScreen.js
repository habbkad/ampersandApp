import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

const LoginScreen = () => {
  return (
    <View style={style.container}>
      <View style={{ flex: 1.3 }}>
        <Image style={{ width: 413, height: 250 }} />
      </View>

      <View style={{ flex: 0.7 }}>
        <View style={style.dedsContainer}>
          <Text> Email</Text>

          <TextInput style={style.textInput} placeholder="Input email" />
        </View>

        <View style={style.dedsContainer}>
          <Text> Password</Text>

          <TextInput
            style={style.textInput}
            placeholder="password"
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity style={style.signInButton}>
          <Text style={style.btnText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 0.5, flexDirection: "row", marginTop: 10 }}>
        <Text style={style.forgotText}>Forgot? </Text>
        <Text style={style.forgotText2}>Reset password </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  dedsContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
    padding: 10,
    marginLeft: 0,
    borderBottomColor: "#ebe6e6",
    borderBottomWidth: 1,
  },
  textInput: {
    marginLeft: 80,
    paddingTop: 1,
    width: 190,
    textAlign: "right",
  },
  signInButton: {
    backgroundColor: "#f5291b",
    marginTop: 40,
    alignItems: "center",
    alignSelf: "center",
    height: 40,
    width: 300,
    borderRadius: 3,
  },
  btnText: {
    marginTop: 9,
    fontSize: 17,
    color: "white",
  },
  forgotText: {
    marginTop: 40,
    marginLeft: 10,
    color: "#f5291b",
  },
  forgotText2: {
    marginTop: 40,
    marginLeft: 10,
    color: "#f5291b",
    borderBottomWidth: 1,
    borderBottomColor: "#f5291b",
  },
});

export default LoginScreen;
