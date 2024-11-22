import React, { useState } from "react";
import {View, Text, StyleSheet, Button, TextInput } from "react-native";

const NameScreen = () => {
    const [name, setName] = useState('');

    return (
        <View>
            <Text>Name Screen</Text>
            <TextInput 
                style={styles.input} 
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newValue)=> setName(newValue)}
            />
            {/* <Button title="Button" /> */}
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
    }
});

export default NameScreen;