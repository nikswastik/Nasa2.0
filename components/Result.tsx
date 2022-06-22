import React, { useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AsteroidContext } from "../Context/Astroid";

export const Result = () => {
  const { text, setText, asteroidInfo, setasteroidInfo } =
    useContext<any>(AsteroidContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Asteroid Info</Text>
      <Text style={styles.text}>Asteroid Id: {asteroidInfo?.id}</Text>
      <Text style={styles.text}>Asteroid Name: {asteroidInfo?.name}</Text>
      <Text style={styles.text}>
        Asteroid Url: {asteroidInfo?.nasa_jpl_url}
      </Text>
      <Text style={styles.text}>
        Asteroid Is Hazardous:
        {asteroidInfo?.is_potentially_hazardous_asteroid ? "True" : "false"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    // backgroundColor: "red",
  },
  text: {
    color: "#f2f7f5",
    marginBottom: 10,
  },
});
