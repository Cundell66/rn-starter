import React, { useState } from "react";
import {View, Text, StyleSheet, Button, TextInput } from "react-native";

const NameScreen = () => {
    const [name, setName] = useState('');

    return (
        <View>
            <Text style={styles.text}>Enter Name:</Text>
            <TextInput 
                style={styles.input} 
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue)=> setName(newValue)}
            />
            {/* <Button title="Button" /> */}
            {name ? <Text style={styles.text}>My Name Is {name}</Text> : null}

        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
    },
    text: {
        margin: 15,
    }
});

export default NameScreen;