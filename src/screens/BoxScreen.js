import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle1}>Box Screen 1</Text>
            <Text style={styles.textStyle2}>Box Screen 2</Text>
            <Text style={styles.textStyle3}>Box Screen 3</Text>
            {/* <Button title="Box Button" /> */}
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        padding: 3,
        height: 200,
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection: 'row',
    },
    textStyle1: {
        flex: 1,
        borderWidth: 3,
        borderColor: 'red',
        backgroundColor: 'pink',
    },
    textStyle2: {
        flex: 1,
        borderWidth: 3,
        borderColor: 'blue',
        backgroundColor: 'lightblue',
    },
    textStyle3: {
        alignSelf: 'flex-start',
        flex: 1,
        borderWidth: 3,
        borderColor: 'green',
        backgroundColor: 'lightgreen',
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // right: 0,
        // bottom: 0,
        // ...StyleSheet.absoluteFillObject,
    },
});

export default BoxScreen;