import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Dimensions,
} from "react-native";
import axios from "axios";
import { AsteroidContext } from "../Context/Astroid";
import { ApiKey } from "../APIKEY/Apikey";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";



export const Home = () => {
    const navigation = useNavigation();
  const { text, setText, asteroidInfo, setasteroidInfo } =
    useContext<any>(AsteroidContext);
  const onChangeText = (text: any) => {
    setText(text);
  };

  const onPressHandler = () => {
    axios
      .get(`https://api.nasa.gov/neo/rest/v1/neo/${text}?api_key=${ApiKey}`)
      .then((response:any) => setasteroidInfo(response.data));
      setText(" ")
      navigation.navigate("Result");
  };

  const generateAsteroid = () => {
    axios
      .get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${ApiKey}`)
      .then((response:any) => setText(response.data.near_earth_objects[0].id));
  };
  return (
    <View style={styles.container}>
      {/* <Text>swas</Text> */}
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="`Enter Asteroid ID`"
        value={text}
      />
      <View style={styles.btnCntr}>
     <View style={styles.btn}>
     <Button
        onPress={onPressHandler}
        title="Submit"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
     </View>
     <View style={styles.btn}>
     <Button
        onPress={generateAsteroid}
        title="Random Asteroid Id"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
     </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({

  container:{
    width:Dimensions.get("window").width,
    padding:20,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  input: {
    width:Dimensions.get("window").width-20,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor:"#f2f7f5"
  },
  btnCntr:{
    display:"flex",
    flexDirection:"row"
  },
  btn:{
    margin:10
  }
});
