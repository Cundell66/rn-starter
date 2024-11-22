import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Box Screen</Text>
            {/* <Button title="Box Button" /> */}
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        padding: 3
    },
    textStyle: {
        borderWidth: 2,
        borderColor: 'red',
    }
});

export default BoxScreen;