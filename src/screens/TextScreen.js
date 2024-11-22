import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const TextScreen = () => {
    const [password, setPassword] = useState('');

    return (
        <View>
            <Text style={styles.text}>Enter Password:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            {/* <Button title="Button" /> */}
            {password.length < 5 ? <Text style={styles.text}>Password must be longer than 5 characters</Text> : null}

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
        marginHorizontal: 15,
    }
});

export default TextScreen;