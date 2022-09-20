import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const SignUp = ({ navigation }) => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={style.Container}>
      <View style={{ flex: 3 }}>
        <TouchableOpacity onPress={pickImage}>
          {image == null ? (
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1662390837659-95a93536fedb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
              }}
              style={{ width: 413, height: 250 }}
            />
          ) : (
            image && (
              <Image
                source={{ uri: image }}
                style={{ width: 413, height: 250 }}
              />
            )
          )}
        </TouchableOpacity>
      </View>
      <View style={{ flex: 6, marginTop: 20 }}>
        <View style={style.dedsContainer}>
          <Text style={style.inputText}> Full Name</Text>

          <TextInput style={style.textInput} placeholder="full name" />
        </View>

        <View style={style.dedsContainer}>
          <Text style={style.inputText}> Email</Text>

          <TextInput style={style.textInput} placeholder="Input email" />
        </View>
        <View style={style.dedsContainer}>
          <Text style={style.inputText}> Phone Number</Text>

          <TextInput style={style.textInput} placeholder="phone number" />
        </View>
        <View style={style.dedsContainer}>
          <Text style={style.inputText}>Role</Text>

          <TextInput style={style.textInput} placeholder=" Role" />
        </View>
        <View style={style.dedsContainer}>
          <Text style={style.inputText}> Twitter</Text>

          <TextInput style={style.textInput} placeholder="Twitter" />
        </View>
        <View style={style.dedsContainer}>
          <Text style={style.inputText}> LinkedIn</Text>

          <TextInput style={style.textInput} placeholder="LinkedIn" />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={style.signUp}
          onPress={() => {
            navigation.navigate("details");
          }}
        >
          <Text>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  Container: {
    flex: 10,
  },

  imageText: {
    alignSelf: "center",
    marginBottom: 20,
  },
  dedsContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 5,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    borderBottomColor: "#ebe6e6",
    borderBottomWidth: 1,
  },
  textInput: {
    paddingTop: 1,
    width: 230,
    textAlign: "right",
  },
  inputText: {
    textAlign: "left",
    width: 100,
  },
  signUp: {
    alignSelf: "center",
    backgroundColor: "#f5291b",
    width: 300,
    height: 40,
    alignItems: "center",
    padding: 9,
    color: "white",
    borderRadius: 3,
  },
});

export default SignUp;
