import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    const imagePath = "../../assets/images/"
    return (
        <View>
            <Text>Image Screen</Text>
            <ImageDetail
                title="Forest"
                imageSource={require(imagePath + 'forest.jpg')}
                score={5}
            />
            <ImageDetail
                title="Beach"
                imageSource={require(imagePath + 'beach.jpg')}
                score={6}
            />
            <ImageDetail
                title="Mountain"
                imageSource={require(imagePath + 'mountain.jpg')}
                score={7}
            />
        </View>
    );
}

const styles = StyleSheet.create({});

export default ImageScreen;