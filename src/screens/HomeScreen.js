import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Pauls Home Screen</Text>
      <Button
        title="Components"
        onPress={() => navigation.navigate('Components')}
      />
      <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate('List')}>
        <Text style={styles.buttonText}>
          List
        </Text>
      </TouchableOpacity>
      <Button
        title="Image"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="Counter"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Color"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title="Square"
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title="Name"
        onPress={() => navigation.navigate('Name')}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  buttonText: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    backgroundColor: '#007070',
  },
  touchable: {
    marginVertical: 10,
  }
});

export default HomeScreen;
