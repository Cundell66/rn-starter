import React, { useState } from "react";
import {View, Text, StyleSheet, Button } from "react-native";

const StylesSheet = () => {
    return (
        <View>
            <Text>Button Screen</Text>
            <Button title="Button" />
        </View>
    )
};

const styles = StyleSheet.create({
        viewStyle:{
            justifyContent:'space-between',
            flexDirection:'row',
        },
        pinkStyle:{ 
            height: 100, 
            width: 100, 
            backgroundColor: "pink" 
        },
        greenStyle:{
            marginTop: 100, 
            height: 100, 
            width: 100, 
            backgroundColor: "lightgreen" 
        },
        blueStyle:{ 
            height: 100, 
            width: 100, 
            backgroundColor: "lightblue" 
        }
});

export default StylesSheet;