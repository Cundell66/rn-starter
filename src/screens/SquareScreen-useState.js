import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {

    const INCREMENT = 15
    const [red, setRed] = useState(255);
    const [green, setGreen] = useState(255);
    const [blue, setBlue] = useState(255);
    const rgb = `rgb(${red}, ${green}, ${blue})`
    console.log(rgb)

    const setColor = (color, change) => {
        // if (color === 'Red') {
        //     if (red + change > 255 || red + change < 0) {
        //         return;
        //     } else {
        //         setRed(red + change)
        //     }
        // } else if (color === 'Green') {
        //     if (green + change > 255 || green + change < 0) {
        //         return;
        //     } else {
        //         setGreen(green + change)
        //     }
        // } else if (color === 'Blue') {
        //     if (blue + change > 255 || blue + change < 0) {
        //         return;
        //     } else {
        //         setBlue(blue + change)
        //     }
        // }
        switch (color) {
            case 'Red':
                red + change > -1 && red + change < 256 ? setRed(red + change) : null;
                return;
            case 'Green':
                green + change > -1 && green + change < 256 ? setGreen(green + change) : null;
                return;
            case 'Blue':
                blue + change > -1 && blue + change < 256 ? setBlue(blue + change) : null;
                return;
            default:
                return;
        }

    }

    return (
        <View>
            <Text>Square Screen</Text>
            <ColorCounter
                color="Red"
                onIncrease={() => { setColor('Red', INCREMENT) }}
                onDecrease={() => { setColor('Red', -INCREMENT) }}
            />
            <ColorCounter
                onIncrease={() => { setColor('Blue', INCREMENT) }}
                onDecrease={() => { setColor('Blue', -INCREMENT) }}
                color="Green"
            />
            <ColorCounter
                onIncrease={() => { setColor('Green', INCREMENT) }}
                onDecrease={() => { setColor('Green', -INCREMENT) }}
                color="Blue"
            />
            <View style={{ height: 100, width: 100, backgroundColor: rgb }} />
        </View>
    )
};

const styles = StyleSheet.create({});

export default SquareScreen;