import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const myName = ["Paul"];
  return (
        <View>
            <Text style={styles.titleText}>Getting started with React Native!</Text>
            <Text style={styles.bodyText}>My name is { myName }</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 45,
  },
  bodyText: {
    fontSize: 20,
  },
  });
  

export default ComponentsScreen;
